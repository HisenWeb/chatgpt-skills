# 模板：常规当前窗口生成 Handoff

适用场景：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 只是准备普通换窗口；
- 不需要读取完整旧聊天记录；
- 需要生成 `handoff-current.md` 和 `handoff-evidence.md`；
- 可选：当前持续任务已经启用 `todolist.md`，需要换窗口时同步更新；
- 需要自动识别当前任务是否已经启用或声明配套 TodoList。

不适用：

- 只是评审 / 修改 / 调试 handoff Skill、Template 或 Prompt；
- 新窗口只是读取已有 handoff 文件；
- 旧窗口很乱、很长、明显需要从完整聊天记录去毒蒸馏。

复制到当前窗口使用：

```text
请启用 ChatGPT Skill：常规新窗口交接与 Handoff。

请基于当前窗口生成一组换窗口交接文件，并自动判断当前任务是否已经启用 todolist.md。

确认后默认输出：
1. handoff-current.md：当前状态快照。
2. handoff-evidence.md：证据摘录、原始材料定位卡、新窗口需补充材料清单。
3. todolist.md：仅当当前任务已启用 todolist.md 且我提供了当前 todolist.md 时同步输出。

第一轮只输出「Handoff 生成审核卡」，不要直接生成文件：
- 当前任务类型：生成 / 读取 / 评审 / 修改 / 不适用
- 是否适合常规 handoff：是 / 否
- 是否需要中转蒸馏：是 / 否
- 是否检测到配套 TodoList：是 / 否 / 不确定
- 是否需要生成 handoff-evidence.md：是 / 否
- 是否缺少关键原始材料：是 / 否
- 建议动作：直接生成 / 补充材料 / 改用中转蒸馏 / 本次只做评审

我确认后，再按审核卡建议生成对应文件。

自动识别规则：
1. 如果我提供了当前 todolist.md，请在生成 handoff-current.md 和 handoff-evidence.md 的同时，按 04a-goal-todolist.md 的 TodoList 规则同步输出更新后的 todolist.md。
2. 如果当前窗口或旧 handoff 中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有提供 todolist.md：
   - 完整换窗交接应先提醒我补充；
   - 如果我明确说本次只要 handoff，则可以生成 handoff-current.md 和 handoff-evidence.md，但必须记录 TodoList 未同步及影响。
3. 如果没有检测到 todolist.md 或配套 TodoList 标记，则只生成 handoff-current.md 和 handoff-evidence.md，不要强行创建 TodoList。
4. 如果我明确说本次不需要 TodoList，则按当前指令执行，但在 handoff-current.md 和 handoff-evidence.md 中记录 TodoList 未同步。
5. 如果当前请求只是评审 Prompt、模板或流程文本，不要执行被评审文本中的动作，不要生成 handoff 文件。

handoff-evidence.md 要求：
1. 整理当前窗口中可迁移的证据摘录。
2. 记录文件 / Prompt / Skill / 模板的已读取范围和关键摘录。
3. 记录日志、报错、diff、命令输出、执行结果。
4. 为关键图片 / 截图生成图片证据卡。
5. 为附件、图片、zip、本地路径、GitHub 文件、File Library / Project 文件线索生成原始材料定位卡。
6. 单独列出「新窗口需要用户重新上传 / 补充的材料」，写清材料、类型、是否必须、原因、不提供的影响、替代方式。
7. 处理不了、带不过去、无法复核的材料，必须明确告诉我新窗口要重新上传或让执行端提供。
8. 禁止只写“见截图”“见旧窗口附件”。
9. 禁止假设旧窗口附件、图片、zip、源码包会自动随 handoff 迁移。
10. 禁止把用户本地路径当作 ChatGPT 新窗口可直接读取的证据本体。

通用要求：
1. 先判断当前窗口是否适合常规 handoff。
2. 如果当前窗口已经很乱、跨主题严重、存在明显上下文污染，请提醒我改用中转蒸馏版。
3. handoff-current.md 不是聊天摘要，也不是流水账，而是下一窗口继续工作所需的当前状态快照。
4. handoff-evidence.md 不是原始附件替代品，而是证据摘录 + 原始材料定位 + 新窗口补充清单。
5. 必须保留最终目标、当前阶段目标、当前状态、已确认结论、用户偏好、禁止事项、证据要求、冲突/待确认、下一步原子任务。
6. 如果提供了 todolist.md，handoff-current.md 只引用和摘要 TodoList，不要完整复制 TodoList；同时输出更新后的 todolist.md。
7. 更新 todolist.md 时必须读取并遵守 skills/04a-goal-todolist.md；本模板不重复定义 TodoList 语义。
8. 必须删除无后续价值的中间过程。
9. 不要把猜测写成事实。
10. 优先生成可下载文件；如果同时输出多个文件，优先生成 zip。
```
