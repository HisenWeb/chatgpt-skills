# 模板：常规当前窗口生成 Handoff

适用场景：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 只是准备普通换窗口；
- 不需要读取完整旧聊天记录；
- 可选：当前持续任务已经启用 `todolist.md`，需要换窗口时同步更新。

复制到当前窗口使用：

```text
请启用 ChatGPT Skill：常规新窗口交接与 Handoff。

请基于当前窗口生成一份 handoff-current.md。

如果当前任务已经启用 todolist.md，我会同时提供当前 todolist.md。请在生成 handoff-current.md 的同时，按 TodoList 规则同步输出更新后的 todolist.md。

要求：
1. 先判断当前窗口是否适合常规 handoff。
2. 如果当前窗口已经很乱、跨主题严重、存在明显上下文污染，请提醒我改用中转蒸馏版。
3. handoff 不是聊天摘要，也不是流水账，而是下一窗口继续工作所需的当前状态快照。
4. 必须保留最终目标、当前阶段目标、当前状态、已确认结论、用户偏好、禁止事项、证据要求、冲突/待确认、下一步原子任务。
5. 如果提供了 todolist.md，handoff 只引用和摘要 TodoList，不要完整复制 TodoList；同时输出更新后的 todolist.md。
6. 更新 todolist.md 时只能做滚动同步：状态更新、新增待确认项、废弃项归档、下一步原子任务更新；不要重新发散生成一份新计划。
7. 不要把 doctor、README、SKILL_INDEX、模板、脚本等支撑设施维护写成主线 TodoList。
8. 必须删除无后续价值的中间过程。
9. 不要把猜测写成事实。
10. 优先生成可下载文件；如果同时输出 handoff-current.md 和 todolist.md，优先生成 zip。
```
