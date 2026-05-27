# ChatGPT Skill Index

## 目的

本索引用于帮助 ChatGPT 在不同任务中选择正确的 Skill 和模板。

不要全量读取所有文件。先根据当前任务判断需要读取哪个 Skill 和哪个模板。

## 职责边界

- `README.md`：仓库用途、目录结构、维护原则和运行方式。
- `SKILL_INDEX.md`：路由索引，只帮助选择 Skill / Template。
- `skills/`：长期行为规则正文。
- `templates/`：可复制的任务启动文本、结构模板与低频 checklist。
- `scripts/doctor.mjs`：结构一致性检查 gate。

不要把完整 Skill 正文塞进 README 或本索引。

## 优先级

1. 用户当前窗口的明确指令
2. 当前任务直接相关的 Skill
3. 当前任务直接相关的 Template
4. 通用总控或仓库维护规则
5. 其他长期规则

如果规则冲突，必须说明冲突点，并优先采用用户当前明确指令。

## 读取原则

1. 先读本文件。
2. 判断当前任务类型。
3. 只读取相关 Skill。
4. 如需启动固定任务、结构模板或低频 checklist，再读取相关 Template。
5. 不要为了“完整”全量读取所有 Skill。
6. 如果当前任务只是一次性临时要求，不要默认沉淀为长期 Skill。

## Doctor 脚本

路径：`scripts/doctor.mjs`

用途：检查仓库结构一致性，避免新增、删除、重命名或弃用 Skill / Template 后漏改 `README.md` 或 `SKILL_INDEX.md`。会校验 `SKILL_INDEX.md` 中每个 Skill 条目的必要字段；检查 Skill 必要章节时会忽略 fenced code block，避免示例结构造成假通过。

建议运行时机：新增、删除、重命名或弃用 Skill / Template 后；修改 README / SKILL_INDEX 后；提交前。

运行方式：

```powershell
node scripts/doctor.mjs
```

## Skill 列表

### 00-skill-authoring.md

- 路径：`skills/00-skill-authoring.md`
- 名称：Skill 编写与仓库维护
- 适用场景：生成、修改、拆分、合并或弃用 Skill；维护 `README.md` / `SKILL_INDEX.md` / Template / `scripts/doctor.mjs`；生成或同步 Skill 触发提示词；判断规则是否该进仓库；识别 Skill 膨胀、重复或污染；生成交付包时做边界判断。
- 不适用场景：普通业务讨论；普通工程修复；普通 handoff 生成；当前窗口临时规则；已由更具体业务 Skill 接管且不涉及仓库维护。
- 推荐模板：`templates/skill-authoring-request.md`；生成触发提示词时可用 `templates/skill-trigger-prompt-generate.md`；多文件打包交付时可用 `templates/skill-delivery-checklist.md`
- 关系：元 Skill，用于维护本仓库中的其他 Skill；不替代具体业务 Skill；交付包和触发提示词细则应下沉到 Template。

### 01-control-reviewer.md

- 路径：`skills/01-control-reviewer.md`
- 名称：总控与质量守门
- 适用场景：技术方案选择；产品 / 工程方向判断；架构收敛；工具选型；Agent / Workflow / Skill / Prompt 设计；工程修复方向判断；识别过度设计、硬编码、工具地狱、流程膨胀或缺少证据。
- 不适用场景：简单翻译、改写或格式整理；普通事实查询且不涉及方案判断；已由更具体 Skill 接管且无明显方向风险。
- 推荐模板：无固定模板。
- 关系：通用质量守门 Skill，可辅助具体业务 Skill，但不覆盖具体 Skill 的输出边界。

### 02-minimal-engineering-fix.md

- 路径：`skills/02-minimal-engineering-fix.md`
- 名称：工程最小改动修复
- 适用场景：修 Bug、排查异常、定位代码行为；处理配置写入、合并、切换、覆盖；多个入口写入同一文件或协议字段；需要先审计入口、配置语义和最小改动。
- 不适用场景：产品方向、工具选型、架构路线讨论；Skill 仓库维护；handoff 或窗口迁移；只解释代码不涉及修复；一次性格式整理、翻译、文案改写。
- 推荐模板：无固定模板。
- 关系：与 `skills/01-control-reviewer.md` 有交集但不重复；具体代码修复优先采用本 Skill 的入口审计要求。

### 04-handoff-regular.md

- 路径：`skills/04-handoff-regular.md`
- 名称：常规新窗口交接与 Handoff
- 适用场景：当前窗口主题集中且仍可靠；普通换窗口；需要生成当前状态快照；需要生成 `handoff-evidence.md`；任务已启用 `todolist.md` 时同步更新 TodoList。
- 不适用场景：旧窗口很长、很乱或跨主题严重；用户认为旧窗口已降智、复读、顺从或越改越乱；需要从完整旧聊天记录做去毒蒸馏；一次性问答；新窗口读取已有 handoff；评审或修改 handoff Skill / Template / Prompt。
- 推荐模板：`templates/handoff-regular-current-window.md`
- 关系：常规版生成 `handoff-current.md` 和 `handoff-evidence.md`；如果任务已启用 TodoList，引用 `skills/04a-goal-todolist.md` 的语义规则；`templates/handoff-evidence-pack.md` 提供证据包结构。

### 04a-goal-todolist.md

- 路径：`skills/04a-goal-todolist.md`
- 名称：目标锚定与 TodoList 初始化
- 适用场景：用户明确要求初始化、修正或同步 `todolist.md`；需要建立“主线推进账本”“大方向 TodoList”或“防漂移 TodoList”；已存在 `todolist.md` 并需要在 Handoff 中同步更新。
- 不适用场景：一次性问答；简单解释、翻译、改写；临时查资料；普通短窗口；当前任务没有持续推进需求；普通 handoff 但未启用过 `todolist.md`。
- 推荐模板：`templates/todolist-init.md`
- 关系：Handoff 体系配套 Skill；不替代 `skills/04-handoff-regular.md` 或 `skills/04b-handoff-distillation.md`；不承载 `handoff-evidence.md` 语义。

### 04b-handoff-distillation.md

- 路径：`skills/04b-handoff-distillation.md`
- 名称：中转窗口去毒蒸馏与 Handoff
- 适用场景：用户明确说明这是中转窗口；上传或粘贴完整旧聊天记录；需要从旧窗口材料生成 `handoff-current.md` 和 `handoff-evidence.md`；需要剔除 AI 脑补、错误尝试、顺从性结论、临时妥协；旧任务已启用 `todolist.md` 时同步更新 TodoList。
- 不适用场景：当前窗口只是普通轻量换窗；不需要读取完整旧聊天记录；当前窗口仍可靠；用户只是想继续业务执行；新窗口读取已有 handoff；评审或修改 handoff Skill / Template / Prompt。
- 推荐模板：`templates/handoff-distill-from-chat-export.md`
- 关系：三窗口迁移流程中的中转版；不负责继续业务执行；输出 `handoff-current.md` 和 `handoff-evidence.md`；如任务启用 TodoList，则引用 `skills/04a-goal-todolist.md` 的语义规则；`templates/handoff-evidence-pack.md` 提供证据包结构。

## Template 列表

| 路径 | 用途 | 关联 Skill |
| --- | --- | --- |
| `templates/skill-authoring-request.md` | 请求生成、修改、拆分、合并或评审 ChatGPT Skill，或维护 Skill 仓库结构。 | `skills/00-skill-authoring.md` |
| `templates/skill-trigger-prompt-generate.md` | 为指定 Skill 生成精炼触发提示词；只负责稳定路由、按需读取和防误执行，不重复 Skill 正文规则。 | `skills/00-skill-authoring.md` |
| `templates/skill-delivery-checklist.md` | 多文件交付、zip、完整文件包 / patch-only 区分与交付一致性自检。 | `skills/00-skill-authoring.md` |
| `templates/todolist-init.md` | 在持续任务方向确定后初始化第一版 `todolist.md`。 | `skills/04a-goal-todolist.md` |
| `templates/handoff-regular-current-window.md` | 当前窗口仍可靠时生成常规 `handoff-current.md` 和 `handoff-evidence.md`；已启用 `todolist.md` 时同步更新 TodoList。 | `skills/04-handoff-regular.md` |
| `templates/handoff-distill-from-chat-export.md` | 中转窗口基于完整旧聊天记录生成新的 `handoff-current.md` 和 `handoff-evidence.md`；可同步更新 TodoList。 | `skills/04b-handoff-distillation.md` |
| `templates/handoff-evidence-pack.md` | `handoff-evidence.md` 的结构模板；整理证据摘录、原始材料定位卡、图片证据卡、新窗口需补充材料清单。 | `skills/04-handoff-regular.md` / `skills/04b-handoff-distillation.md` |
| `templates/new-window-read-handoff-file.md` | 新工作窗口读取上传的 `handoff-current.md`、可选 `handoff-evidence.md` 和可选 `todolist.md`。 | 无需读取生成类 Skill。 |
| `templates/new-window-read-handoff-clipboard.md` | 新工作窗口读取粘贴的 `handoff-current.md`、可选 `handoff-evidence.md` 和可选 `todolist.md`。 | 无需读取生成类 Skill。 |

## 新增 Skill 时的索引更新要求

新增、删除、重命名或弃用 Skill / Template 时，必须同步检查并更新本文件和 `README.md`，并运行 `node scripts/doctor.mjs`。

每个 Skill 条目必须包含：路径、名称、适用场景、不适用场景、推荐模板、关系。

职责边界：

- `README.md` 必须同步保持仓库用途、当前结构、文件清单、Doctor 脚本说明、推荐读取方式和维护原则准确；
- `SKILL_INDEX.md` 只负责路由，不承载完整规则正文；
- Skill 正文承载长期行为规则；
- Template 承载可复制启动文本、结构模板或低频 checklist。
