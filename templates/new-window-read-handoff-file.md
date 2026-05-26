# 模板：新窗口读取 Handoff 文件版

适用场景：

- handoff-current.md 已经由常规窗口或中转窗口生成；
- 用户在新工作窗口上传 handoff-current.md 文件；
- 可选：同一持续任务还配套上传了 todolist.md。

复制到新工作窗口使用：

```text
我们继续上一个窗口的主题。我已上传 handoff-current.md。

如果我同时上传了 todolist.md，请先读取 handoff-current.md，再读取 todolist.md，并用简短要点确认：
1. handoff 中的当前上下文、最终目标、当前阶段目标、当前状态、已确认结论；
2. handoff 中必须遵守的用户偏好、长期规则、禁止事项 / 废弃路径、证据缺口或待确认问题；
3. todolist 中的最终目标、当前阶段目标、大方向 TodoList、当前 P0、下一步原子任务；
4. handoff-current.md 与 todolist.md 是否存在冲突；
5. 如果存在冲突，先指出，不要自行合并；
6. 后续按 todolist.md 推进主线，按 handoff-current.md 遵守上下文、证据和边界。

如果我只上传了 handoff-current.md，没有上传 todolist.md，请读取该文件，并用简短要点确认：
1. 当前目标；
2. 当前状态；
3. 已确认结论；
4. 必须遵守的用户偏好与长期规则；
5. 禁止事项 / 废弃路径；
6. 证据缺口或待确认问题；
7. 下一步建议或下一步原子任务。

要求：
- 不要重新发散。
- 不要重复已经完成的工作。
- 不要继承旧窗口中的错误尝试。
- 如果发现 handoff 内部冲突或证据不足，先指出。
- 确认后再继续工作。
```
