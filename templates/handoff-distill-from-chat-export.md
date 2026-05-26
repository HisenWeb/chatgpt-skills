# 模板：中转窗口从完整聊天记录蒸馏 Handoff

适用场景：

- 这是中转窗口；
- 用户会上传或粘贴完整旧聊天记录；
- 需要从旧窗口材料生成干净的 handoff-current.md；
- 需要剔除旧窗口中的错误尝试、AI 脑补、顺从性结论、临时妥协；
- 可选：旧任务已经启用 `todolist.md`，需要同步生成更新后的 `todolist.md`；
- 需要自动识别旧 handoff 或旧聊天中是否声明存在配套 TodoList。

复制到中转窗口使用：

```text
这是中转蒸馏窗口，不是继续业务执行的窗口。

请启用 ChatGPT Skill：中转窗口去毒蒸馏与 Handoff。

我会提供旧窗口完整聊天记录、旧 handoff、旧 todolist.md 或补充材料。请基于这些材料生成新的 handoff-current.md，并自动判断旧任务是否已经启用 todolist.md。

自动识别规则：
1. 如果我提供了旧 todolist.md，请同时按 04a-goal-todolist.md 的 TodoList 规则输出更新后的 todolist.md。
2. 如果旧 handoff 或旧聊天中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有提供 todolist.md，请在 handoff 的证据缺口 / 待确认中记录，并提醒我补充。
3. 不允许只根据旧聊天中的零散 Todo 片段重建为确定事实；缺少原始 todolist.md 时，只能写成待确认。
4. 如果没有检测到 todolist.md 或配套 TodoList 标记，则只输出 handoff-current.md，不要强行创建 TodoList。

要求：
1. 先判断输入材料是否完整，是否存在截断、附件缺失或证据缺口。
2. 不要把旧聊天写成摘要流水账。
3. 必须执行去毒蒸馏，剔除旧窗口中的 AI 脑补、错误尝试、顺从性结论、临时妥协、无后续价值的中间过程。
4. 用户红线、真实代码、真实 diff、真实日志、真实命令输出、真实截图、用户最新确认结论优先于旧 AI 分析。
5. 如果旧窗口里存在违反用户长期红线的方案，必须标记为“废弃路径 / 禁区”，不要继承为事实。
6. 最终只输出一份新的 handoff-current.md。
7. 如果提供了 todolist.md，最终只输出一份更新后的 todolist.md；不要把旧窗口里的漂移任务原样继承。
8. TodoList 的目标锚定、审核 Gate、P0、状态同步和反漂移规则全部以 04a-goal-todolist.md 为准；本中转 Skill 不重新定义 TodoList 语义。
9. 文档、索引、模板、脚本、配置、检查命令、测试等支撑设施默认只能作为 gate、依赖、完成标准、废弃项或待确认项，不能替代最终目标、当前阶段目标或 P0；除非我明确说明当前阶段就是维护这些设施。
10. 旧窗口 AI 计划不能自动继承为 TodoList 主线。
11. 如果最终目标、当前阶段目标或 P0 在旧材料中发生漂移或冲突，不要直接生成修正版 todolist.md；先按 04a 输出审核卡，除非我明确要求直接生成且材料中三项锚点可信。
12. 下一步必须是原子级任务，不允许要求新窗口一次性完成大范围修改。
13. 优先生成可下载文件；如果同时输出 handoff-current.md 和 todolist.md，优先生成 zip。
```
