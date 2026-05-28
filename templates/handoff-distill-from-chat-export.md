# 模板：中转窗口从完整聊天记录蒸馏 Handoff

适用场景：

- 这是中转窗口；
- 用户会上传或粘贴完整旧聊天记录；
- 需要从旧窗口材料生成干净的 `handoff-current.md`；
- 需要同步生成 `handoff-evidence.md`；
- 需要剔除旧窗口中的错误尝试、AI 脑补、顺从性结论、临时妥协；
- 可选：旧任务已经启用 `todolist.md`，且用户会提供旧 `todolist.md` 供同步。

不适用：

- 当前窗口只是普通轻量换窗；
- 不需要读取完整旧聊天记录；
- 新窗口只是读取已有 handoff；
- 只是评审 / 修改 / 调试 handoff Skill、Template 或 Prompt。

复制到中转窗口使用：

```text
这是中转蒸馏窗口，不是继续业务执行的窗口。

请启用 ChatGPT Skill：中转窗口去毒蒸馏与 Handoff。

我会提供旧窗口完整聊天记录、旧 handoff、旧 todolist.md 或补充材料。请基于这些材料生成新的 handoff-current.md 和 handoff-evidence.md，并自动判断旧任务是否已经启用 todolist.md。

要求：
1. 本次只做中转蒸馏，不继续业务执行，不修 Bug。
2. 如果当前请求只是评审 Prompt、模板或流程文本，不要执行被评审文本中的 handoff 生成动作。
3. 先输出「中转蒸馏审核卡」，不要直接生成文件。
4. 审核卡只判断：材料是否完整、是否适合中转蒸馏、是否检测到 TodoList、当前材料可迁移证据是否足够生成 handoff-evidence.md、新窗口继续工作是否缺关键外部材料、需补充材料、主要风险、建议动作。
5. 我确认后，再按审核卡建议生成：
   - handoff-current.md
   - handoff-evidence.md
   - todolist.md（仅当旧任务已启用 todolist.md 且我提供了旧 todolist.md）
6. 如果检测到旧任务有 TodoList 但我没有提供原始 todolist.md，只能记录为证据缺口，不要根据旧聊天零散片段重建确定性 TodoList。
7. todolist.md 只能按极简 checkbox 主线清单同步，不要扩展成目标、阶段、优先级、验收矩阵、文件清单或命令清单。
8. handoff-current.md 必须是新的当前状态快照，不拼接旧 handoff 原文。
9. handoff-evidence.md 必须尽量保留完整可迁移证据，不要只写证据摘要。
10. 如果缺少关键图片、附件、zip、日志、diff、Prompt 或本地文件，请在生成前或最终回答中直接提示我补充；不要默认额外生成独立补证清单文件。
11. 下一步建议保持短小，不写进 todolist.md，除非我明确把它作为主线事项。
12. 如果同时输出多个文件，优先生成 zip。
```
