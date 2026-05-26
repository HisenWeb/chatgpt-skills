#!/usr/bin/env node

/**
 * ChatGPT Skills repository doctor.
 *
 * Usage:
 *   node scripts/doctor.mjs
 *   node scripts/doctor.mjs /path/to/chatgpt-skills
 *
 * This script checks consistency between real files, README.md and SKILL_INDEX.md.
 * It has no external dependencies.
 */

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || process.cwd());

const requiredRootFiles = ["README.md", "SKILL_INDEX.md"];
const requiredDirs = ["skills", "templates"];

const errors = [];
const warnings = [];

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function listMarkdownFiles(dir) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return [];

  const out = [];
  const walk = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        out.push(toPosix(path.relative(root, full)));
      }
    }
  };

  walk(abs);
  return out.sort();
}

function extractRepoPaths(text) {
  const matches = text.matchAll(/(?:^|[`'"\s(])((?:skills|templates|scripts)\/[A-Za-z0-9._/-]+\.(?:md|mjs|js))(?:[`'"\s)]|$)/gm);
  return [...matches].map((m) => m[1]).sort();
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---", 4);
  if (end === -1) return null;

  const raw = content.slice(4, end).trim();
  const data = {};
  for (const line of raw.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  }
  return data;
}

function hasAny(content, needles) {
  return needles.some((needle) => content.includes(needle));
}

function checkRoot() {
  for (const file of requiredRootFiles) {
    if (!exists(file)) errors.push(`Missing root file: ${file}`);
  }

  for (const dir of requiredDirs) {
    if (!exists(dir)) errors.push(`Missing directory: ${dir}/`);
  }

  for (const temp of ["INDEX.md", "SKILL_INDEX_APPEND.md", "README_APPEND.md"]) {
    if (exists(temp)) warnings.push(`Temporary helper file still exists: ${temp}`);
  }
}

function checkMentionedPaths(readme, index) {
  const referenced = new Set([...extractRepoPaths(readme), ...extractRepoPaths(index)]);

  for (const rel of referenced) {
    if (!exists(rel)) {
      errors.push(`Referenced path does not exist: ${rel}`);
    }
  }
}

function checkSkills(skillFiles, readme, index) {
  const requiredFm = ["name", "version", "status", "last_updated", "scope"];

  for (const rel of skillFiles) {
    const content = read(rel);

    if (!readme.includes(rel)) {
      errors.push(`README.md does not mention skill file: ${rel}`);
    }

    if (!index.includes(rel)) {
      errors.push(`SKILL_INDEX.md does not mention skill file: ${rel}`);
    }

    const fm = parseFrontmatter(content);
    if (!fm) {
      errors.push(`${rel}: missing YAML frontmatter`);
    } else {
      for (const key of requiredFm) {
        if (!fm[key]) errors.push(`${rel}: missing frontmatter field "${key}"`);
      }
      if (fm.status && !["active", "draft", "deprecated"].includes(fm.status)) {
        errors.push(`${rel}: invalid status "${fm.status}"`);
      }
    }

    if (!/^skills\/[0-9]{2}[a-z]?-[a-z0-9-]+\.md$/.test(rel)) {
      warnings.push(`${rel}: filename should look like skills/NN-topic-name.md`);
    }

    const sectionChecks = [
      ["触发场景", ["## 触发场景"]],
      ["不触发场景", ["## 不触发场景"]],
      ["核心定位", ["## 核心定位"]],
      ["工作原则", ["## 工作原则"]],
      ["输出要求/输出风格/推荐输出结构", ["## 输出要求", "## 输出风格", "## 推荐输出结构"]],
      ["禁止事项", ["## 禁止事项", "## 中转窗口禁止事项"]],
    ];

    for (const [label, needles] of sectionChecks) {
      if (!hasAny(content, needles)) {
        errors.push(`${rel}: missing section "${label}"`);
      }
    }
  }
}

function checkTemplates(templateFiles, readme, index) {
  for (const rel of templateFiles) {
    const content = read(rel);

    if (!readme.includes(rel)) {
      errors.push(`README.md does not mention template file: ${rel}`);
    }

    if (!index.includes(rel)) {
      errors.push(`SKILL_INDEX.md does not mention template file: ${rel}`);
    }

    if (!content.includes("```text")) {
      warnings.push(`${rel}: template may be missing a copyable text block`);
    }
  }
}

function checkScripts(scriptFiles, readme, index) {
  for (const rel of scriptFiles) {
    if (!readme.includes(rel)) {
      errors.push(`README.md does not mention script file: ${rel}`);
    }

    if (!index.includes(rel)) {
      warnings.push(`SKILL_INDEX.md does not mention script file: ${rel}`);
    }
  }
}

function checkIndexPolicy(index) {
  const requiredPhrases = [
    "路径",
    "名称",
    "适用场景",
    "不适用场景",
    "推荐模板",
    "关系",
  ];

  for (const phrase of requiredPhrases) {
    if (!index.includes(phrase)) {
      warnings.push(`SKILL_INDEX.md may be missing policy phrase: ${phrase}`);
    }
  }

  if (!index.includes("README.md")) {
    warnings.push("SKILL_INDEX.md should mention README.md synchronization policy");
  }
}

function main() {
  console.log(`Doctor root: ${root}`);

  checkRoot();

  const readme = exists("README.md") ? read("README.md") : "";
  const index = exists("SKILL_INDEX.md") ? read("SKILL_INDEX.md") : "";

  const skillFiles = listMarkdownFiles("skills");
  const templateFiles = listMarkdownFiles("templates");
  const scriptFiles = fs.existsSync(path.join(root, "scripts"))
    ? fs.readdirSync(path.join(root, "scripts"), { withFileTypes: true })
        .filter((entry) => entry.isFile() && /\.(mjs|js)$/.test(entry.name))
        .map((entry) => `scripts/${entry.name}`)
        .sort()
    : [];

  checkMentionedPaths(readme, index);
  checkSkills(skillFiles, readme, index);
  checkTemplates(templateFiles, readme, index);
  checkScripts(scriptFiles, readme, index);
  checkIndexPolicy(index);

  console.log("");
  console.log(`Skills: ${skillFiles.length}`);
  console.log(`Templates: ${templateFiles.length}`);
  console.log(`Scripts: ${scriptFiles.length}`);

  if (warnings.length) {
    console.log("");
    console.log("Warnings:");
    for (const warning of warnings) {
      console.log(`  - ${warning}`);
    }
  }

  if (errors.length) {
    console.log("");
    console.log("Errors:");
    for (const error of errors) {
      console.log(`  - ${error}`);
    }
    console.log("");
    console.log("Result: FAIL");
    process.exit(1);
  }

  console.log("");
  console.log("Result: PASS");
}

main();
