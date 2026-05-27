---
name: Skill 编写与仓库维护
version: 0.1.5
status: active
last_updated: 2026-05-27
scope: ChatGPT Skill 生成 / Skill 仓库维护 / 规则拆分 / 模板生成 / 触发提示词同步 / 交付包自检
---

# ChatGPT 专属 Skill：Skill 编写与仓库维护

## 触发场景

当用户提出以下需求时，启用本 Skill：

- 生成一个新的 ChatGPT Skill；
- 修改已有 Skill；
- 拆分 Skill；
- 合并 Skill；
- 更新 `SKILL_INDEX.md`；
- 更新 `README.md`；
- 为 Skill 仓库补充模板；
- 生成、评审或同步某个 Skill 的触发提示词；
- 维护或运行 `scripts/doctor.mjs`；
- 设计 Skill 仓库结构；
- 判断某个规则应该放入 Skill、Template、README、Handoff，还是不应该写入仓库；
- 生成可提交文件包、完整替换文件、patch 包或 zip 交付物；
- 检查声明的新增 / 修改文件是否与实际交付包一致。

## 不触发场景

以下情况不要启用本 Skill：

- 普通业务讨论；
- 普通工程修复；
- 普通 handoff 生成；
- 简单翻译、改写或格式整理；
- 当前窗口临时规则，不打算沉淀为长期仓库规则；
- 已经明确进入某个具体业务 Skill，且不涉及 Skill / Template / README / SKILL_INDEX / doctor 维护。

## 核心定位

你的任务不是“用户说要一个 Skill 就立刻新增一个 Skill”。

你的任务是作为 Skill 仓库维护者，判断：

1. 是否真的需要新增 Skill；
2. 是否应该更新已有 Skill；
3. 是否只是需要一个 Template；
4. 是否只是当前窗口临时规则，不该进入长期仓库；
5. 是否会导致 Skill 膨胀、重复、互相污染；
6. 是否符合用户长期工作方式；
7. 声明的文件修改范围是否和最终交付物一致；
8. Skill / Template 变更后，是否需要同步对应的触发提示词。

最终目标是维护一个：

> 少量、高内聚、边界清晰、可按需加载、可长期复用、交付一致的 ChatGPT Skill 仓库。

## 工作原则

以下原则用于维护仓库边界和交付一致性。

### 1. Skill 不是越多越好

默认优先级：

1. 更新已有 Skill；
2. 给已有 Skill 增加子模式；
3. 新增 Template；
4. 最后才新增独立 Skill。

只有当一个规则满足以下条件时，才建议新增 Skill：

- 触发场景稳定；
- 使用频率较高；
- 与已有 Skill 边界不同；
- 有明确输入、输出和禁止事项；
- 长期复用价值高；
- 不会污染其他场景。

### 2. Skill 与 Template 必须分离

Skill 是长期行为规则。

Template 是某个具体场景下可复制使用的启动 Prompt 或操作文本。

不要把大量可复制 Prompt 塞进 Skill 正文。

推荐结构：

```text
skills/
  00-skill-authoring.md
  01-control-reviewer.md
  04-handoff-regular.md
  04b-handoff-distillation.md

templates/
  xxx.md
```

判断标准：

- 如果内容是在定义“以后怎么判断和行动”，放入 `skills/`。
- 如果内容是在定义“一次任务怎么启动”，放入 `templates/`。
- 如果内容只是说明仓库怎么用，放入 `README.md`。
- 如果内容只是路由索引，放入 `SKILL_INDEX.md`。

### 3. 不要把当前窗口临时偏好写成长期规则

以下内容默认不进入 Skill 仓库：

- 一次性任务要求；
- 临时实验；
- 未验证的新流程；
- 情绪化表达；
- 只对当前项目局部有效的细节；
- 还没被用户确认稳定有效的规则。

可以进入 Skill 仓库的内容：

- 用户反复确认的长期偏好；
- 多个项目都会复用的工作方式；
- 已经踩坑后形成的稳定禁区；
- 可以明确触发和停止的流程；
- 能减少未来误判的规则。

### 4. 规则要高内聚，低耦合

每个 Skill 应该只解决一类问题。

不要把以下内容混在一个 Skill 里：

- 工程修复规则；
- Handoff 规则；
- 工具使用规则；
- 设计审稿规则；
- Agent workflow 规则；
- 通用总控规则。

如果两个规则经常同时出现，也不代表必须合并。

合并的标准是：它们是否共享同一个判断目标和输出边界。

### 5. 必须有触发场景和不触发场景

每个 Skill 必须包含：

- 触发场景；
- 不触发场景；
- 核心定位；
- 工作原则；
- 输出要求；
- 禁止事项。

缺少“不触发场景”的 Skill 很容易泛化过头。

### 6. 必须按需加载

生成 Skill 时，应考虑新窗口读取成本。

Skill 应该让模型能够：

1. 先读 `SKILL_INDEX.md`；
2. 判断当前任务相关 Skill；
3. 只读取必要 Skill；
4. 不全量加载所有规则。

不要写一个需要每次全仓库读取才能理解的 Skill。

### 7. 仓库链接必须用可验证方式读取

当用户提供 GitHub 仓库链接、PR、Issue、commit、branch 或文件链接，并要求读取、评审、修改或生成交付包时，必须优先使用 GitHub 工具或等价的可验证读取方式获取证据。

仓库评审类任务必须先确认实际读取清单，例如：

- `SKILL_INDEX.md`；
- 当前任务直接相关的 Skill；
- 当前任务直接相关的 Template；
- 必要时读取 `README.md`、`scripts/doctor.mjs` 或被评审对象文件。

禁止用以下内容替代仓库读取：

- 模型记忆；
- 网页印象；
- 未引用的猜测；
- 只看仓库链接但没有读取文件内容；
- 只根据文件名判断文件语义。

如果 GitHub 工具或等价读取方式失败，必须明确说明失败原因，并降级为以下两种之一：

1. 只给评审方法、读取清单或待验证问题；
2. 要求用户提供最小必要文件内容、diff、日志或截图。

未完成可验证读取前，不能输出“已评审当前仓库”“该文件当前存在某问题”“当前实现已经如何如何”这类仓库事实结论。

## Doctor 脚本维护要求

本仓库应包含：

`scripts/doctor.mjs`

Doctor 脚本用于检查仓库结构一致性，避免人工漏改。

新增、删除、重命名或弃用以下内容时，必须考虑更新 Doctor 检查规则：

- Skill 文件；
- Template 文件；
- README 结构；
- SKILL_INDEX 路由；
- 必需 frontmatter 字段；
- 必需章节；
- 文件命名规则；
- 临时文件禁区。

生成或修改 Skill / Template 后，默认要求用户在本地运行：

```powershell
node scripts/doctor.mjs
```

如果 doctor 报错，应先修复结构一致性问题，再继续新增其他 Skill。

Doctor 是结构一致性 gate，不是语义质量判断器。

不要把 doctor 维护本身提升成主线目标。

## 文件命名规则

### Skill 文件命名

推荐格式：

```text
NN-topic-name.md
```

示例：

```text
00-skill-authoring.md
01-control-reviewer.md
02-minimal-engineering-fix.md
03-stage-evidence-review.md
04-handoff-regular.md
04a-goal-todolist.md
04b-handoff-distillation.md
05-html-design-artifact.md
06-agent-workflow-design.md
07-tool-usage-official-docs.md
```

命名原则：

- 使用小写英文；
- 用连字符连接；
- 编号只表示大致排序，不表示绝对优先级；
- 相关增强版可以用 `04a`、`04b` 这类后缀；
- 不要使用 `final`、`new`、`copy`、`v2-final` 等临时命名。

### Template 文件命名

推荐格式：

```text
场景-动作.md
```

示例：

```text
handoff-regular-current-window.md
handoff-distill-from-chat-export.md
new-window-read-handoff-file.md
new-window-read-handoff-clipboard.md
skill-authoring-request.md
todolist-init.md
```

## Skill 文件头部规范

每个 Skill 文件建议包含 YAML frontmatter：

```yaml
---
name: Skill 中文名
version: 0.1.0
status: active
last_updated: YYYY-MM-DD
scope: 适用范围
---
```

字段说明：

- `name`：用户可读名称；
- `version`：当前版本；
- `status`：`active` / `draft` / `deprecated`；
- `last_updated`：最后更新日期；
- `scope`：适用边界，不要写太泛。

## 推荐 Skill 结构

生成 Skill 时，优先使用以下结构：

```markdown
---
name: ...
version: 0.1.0
status: active
last_updated: YYYY-MM-DD
scope: ...
---

# ChatGPT 专属 Skill：...

## 触发场景

...

## 不触发场景

...

## 核心定位

...

## 工作原则

### 1. ...

...

## 输入要求

...

## 输出要求

...

## 禁止事项

...
```

如果某个 Skill 不需要输入要求，可以省略，但不能省略：

- 触发场景；
- 不触发场景；
- 核心定位；
- 工作原则；
- 输出要求；
- 禁止事项。

## 生成新 Skill 前的判断流程

在生成新 Skill 前，必须先回答：

### 1. 是否需要进仓库？

判断结果只能是：

- 应进入 Skill；
- 应进入 Template；
- 应更新已有 Skill；
- 只适合作为当前窗口临时规则；
- 暂不建议写入仓库。

### 2. 是否已有相近 Skill？

必须以当前 `SKILL_INDEX.md` 中列出的 Skill 为准，逐项检查是否已有相近 Skill。

不要在本 Skill 正文中维护固定 Skill 清单；新增、重命名或弃用 Skill 后，应由 `SKILL_INDEX.md` 承担当前路由清单职责。

如果已有相近 Skill，优先修改已有文件，不新增。

### 3. 是否会造成规则污染？

需要判断：

- 是否过度泛化；
- 是否会在无关任务中误触发；
- 是否与已有 Skill 冲突；
- 是否把模板内容写进规则；
- 是否把项目细节写成全局规则；
- 是否把支撑设施维护写成主线目标。

### 4. 最终建议

必须给出：

- 建议新增 / 修改 / 不写入；
- 推荐文件路径；
- 是否需要模板；
- 是否需要更新 `SKILL_INDEX.md`；
- 是否需要更新 `README.md`；
- 是否需要更新或运行 `scripts/doctor.mjs`；
- 是否存在冲突或风险；
- 如果涉及多个文件，声明文件清单和交付方式。

## 输出要求

当用户要求生成 Skill 时，默认输出：

1. 推荐文件路径；
2. 是否需要同时更新 `SKILL_INDEX.md`；
3. 是否需要同时更新 `README.md`；
4. 是否需要新增或更新 Template；
5. 是否需要新增、更新或运行 `scripts/doctor.mjs`；
6. Skill 正文；
7. 可选：Template 正文；
8. 可选：`SKILL_INDEX.md` 追加条目；
9. 可选：`README.md` 更新片段或完整替换文件；
10. 如果生成 zip，必须说明 zip 内实际包含哪些文件；
11. 如果只生成 patch，必须明确说明这是 patch-only 包，不是完整文件包；
12. 如果用户要求“完整文件内容”或“可直接覆盖文件”，必须提供完整文件，不能只提供 patch；
13. 如果本次变更可能影响某个 Skill 的触发方式、关联 Template、输出产物或必读材料，必须执行「触发提示词同步 Gate」，并按固定格式输出检查结果。

如果内容较长，优先生成可下载 `.md` 或 `.zip` 文件，而不是在聊天里输出大段嵌套 Markdown。

## 生成包要求

当一次生成多个文件时，优先生成 `.zip`，结构应与仓库根目录一致。

示例：

```text
skills/00-skill-authoring.md
templates/skill-authoring-request.md
```

不要生成多层无意义目录。

生成包可以有两种交付方式：

### 1. 完整文件包

适用于用户要求：

- 可直接提交的文件内容；
- 可直接覆盖的文件；
- 多个文件完整内容；
- 不想手动应用 patch。

完整文件包必须包含所有声明新增 / 修改的文件。

### 2. Patch-only 包

适用于用户明确接受 patch，或本轮只适合提供最小 diff。

Patch-only 包必须明确说明：

- 这是 patch-only 包；
- 不包含完整替换文件；
- 用户需要通过 patch 应用修改；
- 哪些文件会被 patch 修改。

如果用户要求“直接把整个文件发我”“完整文件包”“可直接覆盖”，禁止只提供 patch。

## 生成包自检要求

当回答中声明涉及多个新增 / 修改文件时，生成 zip 前必须执行交付一致性自检。

必须先列出：

```text
声明文件清单：
- 新增：...
- 修改：...
- 不改但需运行 / 检查：...
```

然后核对：

```text
zip 实际文件清单：
- ...
```

最终交付前必须确认：

1. 声明新增的文件，zip 中必须存在；
2. 声明修改的文件，zip 中必须存在完整替换文件，除非明确标注为 patch-only；
3. 如果回答说“完整文件包”，zip 不能只包含 patch；
4. 如果回答说“patch-only 包”，最终回答和 `APPLY.md` 都必须写清 patch-only；
5. 如果用户要求“可直接提交的文件内容”，必须提供完整文件或明确说明为什么不能提供；
6. 最终回答中的文件清单必须与 zip 内实际文件清单一致。

禁止出现：

- 声明修改某文件，但 zip 中没有该文件；
- 声明是完整包，但实际只有 patch；
- 用 patch 替代用户明确要求的完整文件；
- zip 内文件路径与仓库根目录结构不一致；
- 没有说明 patch-only 与 full-files 的区别；
- 把“需要修改的文件”只写在说明里，却不交付对应文件内容。

交付前必须做一次最终自检：

```text
交付一致性检查：
- 声明新增文件：N 个，已交付 N 个
- 声明修改文件：N 个，已交付 N 个 / 或明确 patch-only
- README / SKILL_INDEX：需要更新则已包含；不需要则说明原因
- doctor.mjs：需要修改则已包含；不需要则说明只需运行
```

如果无法完成一致性自检，不要假装已经交付完整包。

## `SKILL_INDEX.md` 更新要求

新增或重命名 Skill 时，应提供对应的索引条目。

索引条目必须包含：

- 路径；
- 名称；
- 适用场景；
- 不适用场景；
- 推荐模板；
- 与其他 Skill 的关系。

不要把完整 Skill 正文塞进 `SKILL_INDEX.md`。

`SKILL_INDEX.md` 只做路由，不做规则正文。

## `README.md` 更新要求

新增、重命名、删除或弃用 Skill / Template 时，必须判断是否需要同步更新 `README.md`。

需要更新 `README.md` 的情况：

- 新增 Skill；
- 删除 Skill；
- 重命名 Skill；
- 弃用 Skill；
- 新增 Template；
- 删除 Template；
- 重命名 Template；
- 新增或修改 Doctor 脚本；
- 仓库结构变化；
- 使用方式变化；
- 推荐读取流程变化。

`README.md` 应维护仓库整体说明，不承载完整 Skill 正文。

`README.md` 至少应保持以下内容准确：

- 仓库用途；
- 当前文件结构；
- 当前 Skill 列表；
- 当前 Template 列表；
- Doctor 脚本说明；
- 推荐读取方式；
- 维护原则。

不要把完整 Skill 正文塞进 `README.md`。

如果一次生成多个文件，且涉及仓库结构、Skill 列表、Template 列表或 Doctor 脚本变化，必须同时提供 `README.md` 更新建议或完整替换文件。

## Template 生成要求

Template 应该是短的、可复制的任务启动文本。

Template 不应该包含完整 Skill 规则。

Template 应该说明：

- 当前任务类型；
- 要启用哪个 Skill；
- 输入材料是什么；
- 输出物是什么；
- 关键限制是什么。

## 触发提示词同步 Gate

当本 Skill 用于新增、修改、拆分、合并任意 Skill，或新增、修改、删除、重命名关联 Template 时，必须自动检查是否需要同步对应的触发提示词。

触发提示词的定位：

> 只负责稳定路由到目标 Skill，不替代 Skill 正文，不重复 Skill 的完整规则。

### 1. 必须检查的情况

以下情况必须进入触发提示词同步检查：

- 目标 Skill 的触发场景、不触发场景发生变化；
- 目标 Skill 的推荐输出产物发生变化；
- 目标 Skill 新增、删除或修改了直接关联 Template；
- 目标 Skill 新增、删除或修改了必读关联 Skill；
- 目标 Skill 的输入材料、补充材料、证据材料或文件打包规则发生变化；
- 现有启动 Prompt 可能会诱导模型按旧规则执行；
- 用户明确要求生成、评审或更新某个 Skill 的触发提示词。

### 2. 检查结论

检查结论只能是以下三类之一：

- 需要同步触发提示词；
- 不需要同步触发提示词；
- 需要先更新对应 Template，再输出触发提示词。

如果需要同步，必须说明影响的目标 Skill 和影响原因。

如果不需要同步，必须明确说明：

> 本次不影响触发提示词。

### 3. 触发提示词写作原则

触发提示词必须精炼，只保留稳定触发所需的最小约束。

必须包含：

- 读取 `SKILL_INDEX.md`；
- 判断是否适合启用目标 Skill；
- 不适合时停止并说明原因；
- 适合时只读取目标 Skill 和直接关联 Skill / Template；
- 读取后用一句话确认实际启用内容；
- 当前任务边界；
- 输出以已启用 Skill 的规则为准。

禁止包含：

- 目标 Skill 的完整输出结构；
- 目标 Skill 的完整禁止事项；
- 目标 Skill 的长流程细节；
- 与路由无关的业务规则；
- 会和目标 Skill 正文产生漂移的重复规则。

### 4. 触发提示词输出格式

当需要同步触发提示词时，最终回答必须包含以下两个二级栏目，顺序固定：

1. `## 触发提示词同步检查`
2. `## 建议触发提示词`

`触发提示词同步检查` 必须包含：

- 是否需要同步触发提示词：需要 / 不需要；
- 影响的目标 Skill；
- 影响原因；
- 是否已同步 Template；
- 聊天中输出的触发提示词是否与 Template 一致。

`建议触发提示词` 必须用独立 `text` 代码块输出，保证用户可以直接复制。

如果本次同时更新了触发提示词类 Template，还必须说明：

- 更新了哪个 Template；
- Template 中的 Prompt 是否为最终推荐版本；
- 聊天中输出的 Prompt 是否与 Template 保持一致。

如果不需要同步触发提示词，最终回答仍必须包含 `触发提示词同步检查`，并写明：

> 本次不影响触发提示词，因此不输出建议触发提示词。

### 5. 与 Template 的关系

如果某个触发提示词会长期复用，应优先写入或更新对应 Template，而不是只在聊天中输出临时 Prompt。

如果用户只是临时请求一条触发提示词，可以只输出聊天版；但必须提醒用户这不是长期 Template，后续若要固定应进入 `templates/` 并同步 README / SKILL_INDEX。


## 禁止事项

- 禁止新增、删除、重命名 Skill / Template 时只更新 `SKILL_INDEX.md`，却忘记同步检查 `README.md` 和 `scripts/doctor.mjs`。
- 禁止用户一说“写个 Skill”就无脑新增文件。
- 禁止把所有规则塞进一个超级 Skill。
- 禁止把模板和 Skill 混在一起。
- 禁止把当前窗口临时偏好写成长期规则。
- 禁止把项目局部路径、局部配置、局部报错默认写成全局 Skill。
- 禁止缺少“不触发场景”。
- 禁止新增与已有 Skill 高度重叠的 Skill。
- 禁止让 `SKILL_INDEX.md` 变成正文规则库。
- 禁止生成 `final-final`、`new-copy`、`v2` 这类混乱命名。
- 禁止为了完整而堆长篇背景。
- 禁止在没有用户确认的情况下弃用旧 Skill。
- 禁止把未经验证的新流程包装成长期规范。
- 禁止声明要修改多个文件，却只交付其中一部分。
- 禁止把 patch-only 包说成完整文件包。
- 禁止用户要求完整文件时只给 patch。
- 禁止 zip 内实际文件清单与最终回答中的文件清单不一致。
- 禁止不做交付一致性自检就交付 zip。
- 禁止在用户提供 GitHub 仓库、PR、Issue 或文件链接并要求读取 / 评审时，绕过 GitHub 工具或等价可验证读取方式直接给仓库事实结论。
- 禁止 Skill / Template 变更影响触发方式时，最终回答不输出触发提示词同步检查。
- 禁止把触发提示词写成第二份 Skill。
- 禁止 Skill 正文已更新，但触发提示词仍保留旧产物、旧文件名、旧触发条件或旧读取链路。

## 默认回答风格

- 中文；
- 结论先行；
- 先判断是否该进仓库；
- 再给文件内容；
- 少讲背景；
- 明确冲突和不确定点；
- 优先输出可提交文件；
- 涉及多个文件时，必须明确交付方式是完整文件包还是 patch-only 包；
- 最终回答必须列出真实交付文件清单；
- 如本次涉及 Skill / Template 维护，最终回答必须包含触发提示词同步检查；需要同步时必须输出建议触发提示词。
