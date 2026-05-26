# 模板：新窗口读取 Handoff 文件版

适用场景：

- handoff-current.md 已经由常规窗口或中转窗口生成；
- 用户在新工作窗口上传 handoff-current.md 文件；
- 可选：同一持续任务还配套上传了 todolist.md；
- 需要新窗口自动识别是否存在或应存在配套 TodoList。

复制到新工作窗口使用：

```text
我们继续上一个窗口的主题。我已上传 handoff-current.md，可能也上传了 todolist.md。

请先读取 handoff-current.md，并自动判断是否存在配套 TodoList。

自动识别规则：
1. 如果我同时上传了 todolist.md，必须先读 handoff-current.md，再读 todolist.md。
2. 如果 handoff-current.md 中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有上传 todolist.md，请先提醒我补充，不要只根据 handoff 的下一步继续。
3. 如果没有上传 todolist.md，且 handoff 中也没有配套 TodoList 标记，则只按 handoff-current.md 继续。
4. 如果两个文件冲突，先指出冲突，不要自行合并。

确认内容：
- handoff 中的当前上下文、最终目标、当前阶段目标、当前状态、已确认结论；
- handoff 中必须遵守的用户偏好、长期规则、禁止事项 / 废弃路径、证据缺口或待确认问题；
- 如果存在 todolist.md，确认其中的最终目标、当前阶段目标、大方向 TodoList、当前 P0、下一步原子任务；
- 后续按 todolist.md 推进主线，按 handoff-current.md 遵守上下文、证据和边界。

要求：
- 不要重新发散。
- 不要重复已经完成的工作。
- 不要继承旧窗口中的错误尝试。
- 确认后再继续工作。
```
