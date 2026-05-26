# ChatGPT Skills

这是一个存放 ChatGPT 长期工作规则的个人仓库，用来在不同窗口中按需恢复稳定的工作方式。

本仓库不是聊天记录库，也不是普通项目文档库；它只沉淀长期复用、边界清晰、可验证维护的 Skill 与启动模板。

## 使用方式

新窗口中优先使用：

```text
请读取我的 ChatGPT Skill 仓库：
https://github.com/HisenWeb/chatgpt-skills

读取顺序：
1. 先读 SKILL_INDEX.md。
2. 根据当前任务判断需要启用哪些 Skill。
3. 只读取相关 Skill，不要全量读取所有文件。
4. 读取后用一句话确认启用的 Skill 名称。
5. 后续回答必须遵守已启用 Skill。

当前窗口主题：
〖填写当前主题〗
```

## 文件职责

| 文件 / 目录 | 职责 |
| --- | --- |
| `README.md` | 仓库用途、目录结构、维护原则和运行方式；不承载完整规则正文。 |
| `SKILL_INDEX.md` | Skill / Template 路由索引；帮助按需选择文件；不承载完整规则正文。 |
| `skills/` | 长期行为规则。 |
| `templates/` | 可复制的任务启动文本。 |
| `scripts/doctor.mjs` | 结构一致性检查 gate。 |

## 当前结构

```text
.
├─ README.md
├─ SKILL_INDEX.md
├─ skills/
│  ├─ 00-skill-authoring.md
│  ├─ 01-control-reviewer.md
│  ├─ 02-minimal-engineering-fix.md
│  ├─ 04-handoff-regular.md
│  ├─ 04a-goal-todolist.md
│  └─ 04b-handoff-distillation.md
├─ templates/
│  ├─ skill-authoring-request.md
│  ├─ todolist-init.md
│  ├─ handoff-regular-current-window.md
│  ├─ handoff-distill-from-chat-export.md
│  ├─ new-window-read-handoff-file.md
│  └─ new-window-read-handoff-clipboard.md
└─ scripts/
   └─ doctor.mjs
```

## 当前 Skill

| 路径 | 名称 | 用途 |
| --- | --- | --- |
| `skills/00-skill-authoring.md` | Skill 编写与仓库维护 | 生成、修改、拆分、合并 Skill；维护 Template、README、SKILL_INDEX 和 doctor；检查交付包一致性。 |
| `skills/01-control-reviewer.md` | 总控与质量守门 | 方案判断、风险识别、反 Yes-man、质量守门。 |
| `skills/02-minimal-engineering-fix.md` | 工程最小改动修复 | 工程修复前的入口审计、配置语义判断、最小改动和验证输出。 |
| `skills/04-handoff-regular.md` | 常规新窗口交接与 Handoff | 当前窗口可靠时生成当前状态快照；必要时同步已有 TodoList。 |
| `skills/04a-goal-todolist.md` | 目标锚定与 TodoList 初始化 | 持续任务进入主线推进后初始化或校正 `todolist.md`。 |
| `skills/04b-handoff-distillation.md` | 中转窗口去毒蒸馏与 Handoff | 基于旧窗口材料生成干净的 `handoff-current.md`；必要时同步 TodoList。 |

详细触发条件、禁区和输出规则以各 Skill 正文为准；README 只保留概览。

## 当前 Template

| 路径 | 用途 |
| --- | --- |
| `templates/skill-authoring-request.md` | 请求生成、修改、拆分、合并 Skill，或维护 Skill 仓库结构。 |
| `templates/todolist-init.md` | 在持续任务方向确定后初始化第一版 `todolist.md`。 |
| `templates/handoff-regular-current-window.md` | 当前窗口仍可靠时生成常规 `handoff-current.md`。 |
| `templates/handoff-distill-from-chat-export.md` | 中转窗口基于完整旧聊天记录生成新的 `handoff-current.md`。 |
| `templates/new-window-read-handoff-file.md` | 新窗口读取上传的 `handoff-current.md` 和可选 `todolist.md`。 |
| `templates/new-window-read-handoff-clipboard.md` | 新窗口读取粘贴的 `handoff-current.md` 和可选 `todolist.md`。 |

## Doctor 脚本

运行方式：

```powershell
node scripts/doctor.mjs
```

检查范围：

- 根目录必要文件；
- `skills/`、`templates/` 目录；
- README / SKILL_INDEX 中引用路径是否存在；
- 所有 Skill / Template 是否被 README 和 SKILL_INDEX 引用；
- `SKILL_INDEX.md` 中每个 Skill 条目是否包含必要字段；
- Skill frontmatter 必填字段；
- Skill 必要章节；
- 检查 Skill 必要章节时忽略 fenced code block，避免示例结构造成假通过；
- 临时 helper 文件残留。

Doctor 是结构一致性 gate，不替代语义评审。

## 维护原则

1. 先读 `SKILL_INDEX.md`，再按需读取相关 Skill。
2. Skill 不是越多越好，默认优先更新已有 Skill 或新增 Template。
3. `README.md` 只做仓库概览，`SKILL_INDEX.md` 只做路由索引，Skill 正文才承载规则。
4. 不把当前窗口临时偏好、单项目细节或未验证流程写入长期 Skill。
5. 新增、删除、重命名或弃用 Skill / Template 时，必须同步检查 README、SKILL_INDEX、相关模板和 `scripts/doctor.mjs`。
6. 提交前运行 `node scripts/doctor.mjs`。
