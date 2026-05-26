# ChatGPT Skills

这是一个用于存放 ChatGPT 长期工作规则的个人仓库。

## 用途

本仓库用于保存可复用的 Skill 文档和任务模板，帮助在不同窗口中保持一致的工作方式。

它不是普通项目文档库，也不是聊天记录仓库。它的目标是让 ChatGPT 在新窗口中能够按需读取用户长期认可的工作规则。

## 当前文件结构

```text
.
├─ README.md
├─ SKILL_INDEX.md
├─ skills/
│  ├─ 00-skill-authoring.md
│  ├─ 01-control-reviewer.md
│  ├─ 04-handoff-regular.md
│  └─ 04b-handoff-distillation.md
├─ templates/
│  ├─ skill-authoring-request.md
│  ├─ handoff-regular-current-window.md
│  ├─ handoff-distill-from-chat-export.md
│  ├─ new-window-read-handoff-file.md
│  └─ new-window-read-handoff-clipboard.md
└─ scripts/
   └─ doctor.mjs
```

## 使用原则

1. 先读 `SKILL_INDEX.md`。
2. 根据当前任务选择相关 Skill。
3. 只读取相关 Skill，不要全量读取所有文件。
4. `skills/` 存放长期行为规则。
5. `templates/` 存放可复制的任务启动模板。
6. 当前窗口用户明确指令优先于仓库规则。

## 当前 Skill

### `skills/00-skill-authoring.md`

名称：Skill 编写与仓库维护

用途：

- 生成新的 ChatGPT Skill；
- 修改已有 Skill；
- 拆分或合并 Skill；
- 判断某条规则应该进入 Skill、Template、README、SKILL_INDEX，还是不应进入仓库；
- 更新 `SKILL_INDEX.md`；
- 为 Skill 仓库补充模板。

这是元 Skill，用于维护本仓库中的其他 Skill。它不替代具体业务 Skill。

### `skills/01-control-reviewer.md`

名称：总控与质量守门

用途：

- 技术方案选择；
- 产品 / 工程方向判断；
- 用户带强假设推进方案；
- 架构收敛；
- 工具选型；
- Agent / Workflow / Skill / Prompt 设计；
- 工程修复方向判断。

这是通用质量守门 Skill，用于防止盲目顺从、过度设计、工具地狱、硬编码、临时验证正式化和缺少证据的判断。

### `skills/04-handoff-regular.md`

名称：常规新窗口交接与 Handoff

用途：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 用户只是普通准备换窗口；
- 需要生成当前状态快照；
- 不需要从完整旧聊天记录做去毒蒸馏。

### `skills/04b-handoff-distillation.md`

名称：中转窗口去毒蒸馏与 Handoff

用途：

- 用户明确说明这是中转窗口；
- 用户上传或粘贴完整旧聊天记录；
- 需要从旧窗口材料生成 `handoff-current.md`；
- 需要剔除旧窗口中的 AI 脑补、错误尝试、顺从性结论、临时妥协；
- 需要基于旧 handoff + 完整聊天记录滚动生成新的 `handoff-current.md`。

## 当前模板

### `templates/skill-authoring-request.md`

用于请求生成、修改、拆分或合并 Skill。

### `templates/handoff-regular-current-window.md`

用于当前窗口仍然可靠时，生成常规 `handoff-current.md`。

### `templates/handoff-distill-from-chat-export.md`

用于中转窗口基于完整旧聊天记录生成新的 `handoff-current.md`。

### `templates/new-window-read-handoff-file.md`

用于新工作窗口读取已上传的 `handoff-current.md` 文件。

### `templates/new-window-read-handoff-clipboard.md`

用于新工作窗口读取用户直接粘贴的 `handoff-current.md` 内容。

## Doctor 脚本

### `scripts/doctor.mjs`

用于检查仓库结构一致性，避免新增 Skill / Template 后漏改 `README.md` 或 `SKILL_INDEX.md`。

运行方式：

```powershell
node scripts/doctor.mjs
```

可检查：

- `README.md` 是否存在；
- `SKILL_INDEX.md` 是否存在；
- `skills/` 和 `templates/` 是否存在；
- 所有 Skill 是否被 README 和 SKILL_INDEX 引用；
- 所有 Template 是否被 README 和 SKILL_INDEX 引用；
- SKILL_INDEX / README 中引用的路径是否真实存在；
- Skill frontmatter 是否包含必要字段；
- Skill 是否包含触发场景、不触发场景、核心定位、工作原则、输出要求或输出风格、禁止事项；
- 是否残留 `INDEX.md`、`SKILL_INDEX_APPEND.md` 等临时文件。

## 推荐读取方式

新窗口中可以使用：

```text
请读取我的 ChatGPT Skill 仓库：
https://github.com/HisenWeb/chatgpt-skills

读取顺序：
1. 先读 SKILL_INDEX.md。
2. 根据当前任务判断需要启用哪些 Skill。
3. 只读取相关 Skill，不要全量读取所有文件。
4. 读取后用一句话确认启用的 Skill 名称。

当前窗口主题：
【填写当前主题】
```

## 维护原则

1. Skill 不是越多越好。
2. 默认优先更新已有 Skill，再考虑新增。
3. Template 和 Skill 必须分离。
4. `SKILL_INDEX.md` 只做路由，不承载完整规则正文。
5. 不把当前窗口临时偏好写入长期仓库。
6. 不把项目局部细节默认写成全局 Skill。
7. 新增、删除、重命名或弃用 Skill / Template 时，必须同步考虑是否需要更新 README、SKILL_INDEX 和模板，并运行 `node scripts/doctor.mjs`。
