# ChatGPT Skill Index

## 目的

本索引用于帮助 ChatGPT 在不同任务中选择正确的 Skill 和模板。

不要全量读取所有文件。先根据当前任务判断需要读取哪个 Skill 和哪个模板。

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
4. 如需启动固定任务，再读取相关 Template。
5. 不要为了“完整”全量读取所有 Skill。
6. 如果当前任务只是一次性临时要求，不要默认沉淀为长期 Skill。

## Doctor 脚本

路径：

`scripts/doctor.mjs`

用途：

检查仓库结构一致性，避免新增、删除、重命名或弃用 Skill / Template 后漏改 `README.md` 或 `SKILL_INDEX.md`。

建议运行时机：

- 新增 Skill 后；
- 删除 Skill 后；
- 重命名 Skill 后；
- 弃用 Skill 后；
- 新增 Template 后；
- 删除 Template 后；
- 重命名 Template 后；
- 修改 README / SKILL_INDEX 后；
- 提交前。

运行方式：

```powershell
node scripts/doctor.mjs
```

## Skill 列表

### 00-skill-authoring.md

路径：

`skills/00-skill-authoring.md`

名称：

Skill 编写与仓库维护

适用场景：

- 生成新的 ChatGPT Skill；
- 修改已有 Skill；
- 拆分或合并 Skill；
- 判断规则应该进入 Skill、Template、README 还是不进入仓库；
- 更新 `SKILL_INDEX.md`；
- 为 Skill 仓库补充模板；
- 维护本仓库结构；
- 判断是否存在 Skill 膨胀、重复或互相污染。

不适用场景：

- 普通业务讨论；
- 普通工程修复；
- 普通 handoff 生成；
- 当前窗口临时规则，不打算沉淀为长期规则；
- 已经明确进入某个具体业务 Skill 的场景。

推荐模板：

`templates/skill-authoring-request.md`

关系：

这是元 Skill，用于维护本仓库中的其他 Skill。它不替代具体业务 Skill。

---

### 01-control-reviewer.md

路径：

`skills/01-control-reviewer.md`

名称：

总控与质量守门

适用场景：

- 技术方案选择；
- 产品 / 工程方向判断；
- 用户带强假设推进方案；
- 架构收敛；
- 工具选型；
- Agent / Workflow / Skill / Prompt 设计；
- 工程修复方向判断；
- 需要识别过度设计、硬编码、工具地狱、流程膨胀或缺少证据的问题。

不适用场景：

- 用户只是要求简单翻译、改写或格式整理；
- 用户只是要求普通事实查询，且不涉及方案判断；
- 已经明确进入某个更具体的业务 Skill，例如 Handoff 生成或 Skill 仓库维护；
- 当前任务没有明显决策、审稿、风险识别或收敛需求。

推荐模板：

无固定模板。通常由当前任务自然触发。

关系：

这是通用质量守门 Skill。它可以与具体业务 Skill 配合使用，但不替代具体业务 Skill。若与当前任务相关 Skill 冲突，应先说明冲突，再优先采用当前任务相关 Skill 和用户当前明确指令。

---

### 02-minimal-engineering-fix.md

路径：

`skills/02-minimal-engineering-fix.md`

名称：

工程最小改动修复

适用场景：

- 修 Bug、排查异常、定位代码行为；
- 修改配置写入、配置合并、配置切换、配置覆盖逻辑；
- 处理本地配置与生成配置之间的字段丢失、覆盖、回填、缓存、基准文件问题；
- 多个入口可能写入同一份文件、同一段配置或同一组协议字段；
- 用户要求给出代码 patch、修改方案、修复步骤；
- 用户当前排查方向可能导致过度设计、硬编码、临时验证正式化或绕过源头审计；
- 工程修复需要判断“该改哪里、不该改哪里、最小改动是什么”。

不适用场景：

- 用户只是做产品方向、工具选型、架构路线讨论，应优先使用 `skills/01-control-reviewer.md`；
- 用户是在生成、修改或维护 Skill 仓库，应优先使用 `skills/00-skill-authoring.md`；
- 用户是在做 handoff 或窗口迁移，应优先使用对应 Handoff Skill；
- 用户只是要求解释一段代码，不涉及修复、合并、覆盖、写入入口或 patch；
- 用户只是一次性格式整理、翻译、文案改写。

推荐模板：

无固定模板。通常由具体工程问题自然触发。

关系：

这是具体工程修复 Skill。它和 `skills/01-control-reviewer.md` 有交集但不重复：`01` 负责方案方向、风险识别和反 Yes-man；`02` 负责工程修复前的入口审计、配置语义判断、最小改动和验证输出。若任务进入具体代码修复，应优先采用 `02` 的入口审计要求。

---

### 04-handoff-regular.md

路径：

`skills/04-handoff-regular.md`

名称：

常规新窗口交接与 Handoff

适用场景：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 用户只是普通准备换窗口；
- 需要生成当前状态快照；
- 不需要从完整旧聊天记录做去毒蒸馏。

不适用场景：

- 旧窗口很长、很乱、跨主题严重；
- 用户认为旧窗口已经降智、复读、顺从或越改越乱；
- 用户会把完整聊天记录放到中转窗口；
- 需要从旧聊天导出材料生成 `handoff-current.md`。

推荐模板：

`templates/handoff-regular-current-window.md`

关系：

常规版用于当前窗口直接生成状态快照。它不负责读取完整旧聊天记录，也不负责去毒蒸馏。

---

### 04b-handoff-distillation.md

路径：

`skills/04b-handoff-distillation.md`

名称：

中转窗口去毒蒸馏与 Handoff

适用场景：

- 用户明确说明这是中转窗口；
- 用户上传或粘贴完整旧聊天记录；
- 需要从旧窗口材料生成 `handoff-current.md`；
- 需要剔除旧窗口中的 AI 脑补、错误尝试、顺从性结论、临时妥协；
- 需要基于旧 handoff + 完整聊天记录滚动生成新的 `handoff-current.md`。

不适用场景：

- 当前窗口只是普通轻量换窗；
- 不需要读取完整旧聊天记录；
- 当前窗口仍然可靠，直接生成当前状态快照即可；
- 用户只是想继续业务执行，而不是做中转蒸馏。

推荐模板：

`templates/handoff-distill-from-chat-export.md`

关系：

中转版用于三窗口迁移流程中的中转窗口。它负责从旧聊天材料中提取干净的当前状态快照，不负责继续业务执行。

## Template 列表

### skill-authoring-request.md

路径：

`templates/skill-authoring-request.md`

用途：

请求生成、修改、拆分或合并 ChatGPT Skill。

关联 Skill：

`skills/00-skill-authoring.md`

---

### handoff-regular-current-window.md

路径：

`templates/handoff-regular-current-window.md`

用途：

当前窗口仍然可靠时，请求生成常规 `handoff-current.md`。

关联 Skill：

`skills/04-handoff-regular.md`

---

### handoff-distill-from-chat-export.md

路径：

`templates/handoff-distill-from-chat-export.md`

用途：

在中转窗口中，基于完整旧聊天记录生成新的 `handoff-current.md`。

关联 Skill：

`skills/04b-handoff-distillation.md`

---

### new-window-read-handoff-file.md

路径：

`templates/new-window-read-handoff-file.md`

用途：

新工作窗口读取用户上传的 `handoff-current.md` 文件。

关联 Skill：

无需读取生成类 Skill。此模板只用于读取已经生成的 handoff。

---

### new-window-read-handoff-clipboard.md

路径：

`templates/new-window-read-handoff-clipboard.md`

用途：

新工作窗口读取用户直接粘贴的 `handoff-current.md` 内容。

关联 Skill：

无需读取生成类 Skill。此模板只用于读取已经生成的 handoff。

## 新增 Skill 时的索引更新要求

新增、删除、重命名或弃用 Skill / Template 时，必须同步检查并更新本文件和 `README.md`，并运行 `node scripts/doctor.mjs`。

每个 Skill 条目必须包含：

- 路径；
- 名称；
- 适用场景；
- 不适用场景；
- 推荐模板；
- 与其他 Skill 的关系。

`README.md` 必须同步保持以下内容准确：

- 当前文件结构；
- 当前 Skill 列表；
- 当前 Template 列表；
- Doctor 脚本说明；
- 推荐读取方式；
- 维护原则。

不要把完整 Skill 正文塞进本文件。

本文件只负责路由，不承载完整规则正文。
