# 模板：常规当前窗口生成 Handoff

适用场景：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 只是准备普通换窗口；
- 不需要读取完整旧聊天记录；
- 可选：当前持续任务已经启用 `todolist.md`，需要换窗口时同步更新；
- 需要自动识别当前任务是否已经启用或声明配套 TodoList。

复制到当前窗口使用：

```text
请启用 ChatGPT Skill：常规新窗口交接与 Handoff。

请基于当前窗口生成一份 handoff-current.md，并自动判断当前任务是否已经启用 todolist.md。

自动识别规则：
1. 如果我提供了当前 todolist.md，请在生成 handoff-current.md 的同时，按 04a-goal-todolist.md 的 TodoList 规则同步输出更新后的 todolist.md。
2. 如果当前窗口或旧 handoff 中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有提供 todolist.md，请先提醒我补充，不要只生成 handoff。
3. 如果没有检测到 todolist.md 或配套 TodoList 标记，则只生成 handoff-current.md，不要强行创建 TodoList。
4. 如果我明确说本次不需要 TodoList，则按当前指令执行，但在 handoff 的证据缺口 / 待确认中记录 TodoList 未同步。

要求：
1. 先判断当前窗口是否适合常规 handoff。
2. 如果当前窗口已经很乱、跨主题严重、存在明显上下文污染，请提醒我改用中转蒸馏版。
3. handoff 不是聊天摘要，也不是流水账，而是下一窗口继续工作所需的当前状态快照。
4. 必须保留最终目标、当前阶段目标、当前状态、已确认结论、用户偏好、禁止事项、证据要求、冲突/待确认、下一步原子任务。
5. 如果提供了 todolist.md，handoff 只引用和摘要 TodoList，不要完整复制 TodoList；同时输出更新后的 todolist.md。
6. 更新 todolist.md 时只能做滚动同步：状态更新、新增待确认项、废弃项归档、下一步原子任务更新；不要重新发散生成一份新计划。
7. TodoList 的目标锚定、审核 Gate、P0、状态同步和反漂移规则全部以 04a-goal-todolist.md 为准；本 handoff Skill 不重新定义 TodoList 语义。
8. 文档、索引、模板、脚本、配置、检查命令、测试等支撑设施默认不能替代最终目标、当前阶段目标或 P0，除非我明确说明当前阶段就是维护这些设施。
9. 如果最终目标、当前阶段目标或 P0 发生实质变化，不要直接改写 todolist.md；先按 04a 输出审核卡，除非我明确要求直接生成且材料中三项锚点可信。
10. 必须删除无后续价值的中间过程。
11. 不要把猜测写成事实。
12. 优先生成可下载文件；如果同时输出 handoff-current.md 和 todolist.md，优先生成 zip。
```
