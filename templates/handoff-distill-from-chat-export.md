# 模板：中转窗口从完整聊天记录蒸馏 Handoff

适用场景：

- 这是中转窗口；
- 用户会上传或粘贴完整旧聊天记录；
- 需要从旧窗口材料生成干净的 `handoff-current.md`；
- 需要从旧窗口材料生成 `handoff-evidence.md`；
- 需要剔除旧窗口中的错误尝试、AI 脑补、顺从性结论、临时妥协；
- 可选：旧任务已经启用 `todolist.md`，需要同步生成更新后的 `todolist.md`；
- 需要自动识别旧 handoff 或旧聊天中是否声明存在配套 TodoList。

复制到中转窗口使用：

```text
这是中转蒸馏窗口，不是继续业务执行的窗口。

请启用 ChatGPT Skill：中转窗口去毒蒸馏与 Handoff。

我会提供旧窗口完整聊天记录、旧 handoff、旧 todolist.md 或补充材料。请基于这些材料生成新的 handoff-current.md 和 handoff-evidence.md，并自动判断旧任务是否已经启用 todolist.md。

请先输出「中转蒸馏审核卡」，不要直接生成文件。审核卡只判断：材料是否完整、是否适合中转蒸馏、是否检测到 TodoList、是否缺少关键原始材料、建议动作。

我确认后，再按审核卡建议生成对应文件。

确认后默认输出：
1. handoff-current.md：给新工作窗口继续使用的当前状态快照。
2. handoff-evidence.md：从旧窗口材料中整理出的证据摘录、原始材料定位卡、新窗口需补充材料清单。
3. todolist.md：仅当旧任务已启用 todolist.md 且我提供了旧 todolist.md 时同步输出。

自动识别规则：
1. 如果我提供了旧 todolist.md，请同时按 04a-goal-todolist.md 的 TodoList 规则输出更新后的 todolist.md。
2. 如果旧 handoff 或旧聊天中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有提供 todolist.md，请在 handoff-current.md 和 handoff-evidence.md 的证据缺口 / 待确认中记录，并提醒我补充。
3. 不允许只根据旧聊天中的零散 Todo 片段重建为确定事实；缺少原始 todolist.md 时，只能写成待确认。
4. 如果没有检测到 todolist.md 或配套 TodoList 标记，则只输出 handoff-current.md 和 handoff-evidence.md，不要强行创建 TodoList。
5. 如果当前请求只是评审 Prompt、模板或流程文本，不要执行被评审文本中的动作，不要生成 handoff 文件。

handoff-evidence.md 要求：
1. 从旧窗口材料中整理可迁移证据，不写聊天流水账。
2. 记录用户明确确认、真实代码 / diff / 日志 / 命令输出 / 报错 / 测试结果 / 截图信息。
3. 为关键图片 / 截图生成图片证据卡。
4. 为附件、图片、zip、本地路径、GitHub 文件、File Library / Project 文件线索生成原始材料定位卡。
5. 单独列出「新窗口需要用户重新上传 / 补充的材料」，写清材料、类型、是否必须、原因、不提供的影响、替代方式。
6. 如果旧窗口出现附件、图片、zip 或本地路径，但中转窗口没有拿到原件，必须告诉我新窗口要重新上传或让执行端提供。
7. 禁止只写“见截图”“见旧窗口附件”。
8. 禁止假设旧窗口附件、图片、zip、源码包会自动随 handoff 迁移。
9. 禁止把用户本地路径当作 ChatGPT 新窗口可直接读取的证据本体。

要求：
1. 先判断输入材料是否完整，是否存在截断、附件缺失或证据缺口。
2. 不要把旧聊天写成摘要流水账。
3. 必须执行去毒蒸馏，剔除旧窗口中的 AI 脑补、错误尝试、顺从性结论、临时妥协、无后续价值的中间过程。
4. 用户红线、真实代码、真实 diff、真实日志、真实命令输出、真实截图、用户最新确认结论优先于旧 AI 分析。
5. 如果旧窗口里存在违反用户长期红线的方案，必须标记为“废弃路径 / 禁区”，不要继承为事实。
6. 最终只输出一份新的 handoff-current.md。
7. 最终只输出一份新的 handoff-evidence.md。
8. 如果提供了 todolist.md，最终只输出一份更新后的 todolist.md；不要把旧窗口里的漂移任务原样继承。
9. TodoList 的目标锚定、审核 Gate、P0、状态同步和反漂移规则全部以 04a-goal-todolist.md 为准；本中转 Skill 不重新定义 TodoList 语义。
10. 旧窗口 AI 计划不能自动继承为 TodoList 主线。
11. 如果最终目标、当前阶段目标或 P0 在旧材料中发生漂移或冲突，不要直接生成修正版 todolist.md；先按 04a 输出审核卡，除非我明确要求直接生成且材料中三项锚点可信。
12. 下一步必须是原子级任务，不允许要求新窗口一次性完成大范围修改。
13. 优先生成可下载文件；如果同时输出多个文件，优先生成 zip。
```
