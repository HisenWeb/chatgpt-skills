# 模板：常规当前窗口生成 Handoff

适用场景：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 只是准备普通换窗口；
- 不需要读取完整旧聊天记录；
- 需要生成 `handoff-current.md` 和 `handoff-evidence.md`；
- 可选：当前持续任务已经启用 `todolist.md`，且你会提供当前 `todolist.md` 供同步。

不适用：

- 只是评审 / 修改 / 调试 handoff Skill、Template 或 Prompt；
- 新窗口只是读取已有 handoff 文件；
- 旧窗口很乱、很长、明显需要从完整聊天记录去毒蒸馏。

复制到当前窗口使用：

```text
请启用 ChatGPT Skill：常规新窗口交接与 Handoff。

请基于当前窗口生成换窗口交接文件，并自动判断当前任务是否已经启用 todolist.md。

要求：
1. 本次是生成 handoff，不是评审 Prompt / 模板 / 流程文本；如果判断不是生成任务，请停止并说明原因。
2. 先输出「Handoff 生成审核卡」，不要直接生成文件。
3. 审核卡只判断：是否适合常规 handoff、是否需要中转蒸馏、是否检测到 TodoList、是否缺少关键原始材料、建议动作。
4. 我确认后，再按审核卡建议生成：
   - handoff-current.md
   - handoff-evidence.md
   - todolist.md（仅当当前任务已启用 todolist.md 且我提供了当前 todolist.md）
5. 如果检测到应同步 todolist.md 但我没有提供，请先提醒我补充；如果我明确说本次只要 handoff，则记录 TodoList 未同步及影响。
6. handoff-current.md 只写当前状态快照，不写聊天流水账。
7. handoff-evidence.md 只整理可迁移、可复核的证据；无法自动携带的附件、截图、zip、本地路径、日志或 diff，必须列为新窗口需补充材料。
8. 如果同时输出多个文件，优先生成 zip。
```
