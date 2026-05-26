# 模板：新窗口读取 Handoff 剪贴板版

适用场景：

- handoff-current.md 已经生成；
- 用户不上传文件，而是直接把 handoff 内容粘贴到新窗口；
- 可选：同一持续任务还会粘贴 todolist.md；
- 需要新窗口自动识别是否存在或应存在配套 TodoList。

复制到新工作窗口使用：

```text
我们继续上一个窗口的主题。下面是 handoff-current.md，后面可能还会粘贴 todolist.md。

请先阅读 handoff-current.md，并自动判断是否存在配套 TodoList。

自动识别规则：
1. 如果后面提供了 todolist.md，必须先读 handoff-current.md，再读 todolist.md。
2. 如果 handoff-current.md 中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有粘贴 todolist.md，请先提醒我补充。
3. 如果没有 todolist.md，且 handoff 中也没有配套 TodoList 标记，则只按 handoff-current.md 继续。
4. 如果 handoff-current.md 与 todolist.md 冲突，先指出冲突，不要自行合并。

请确认：
1. handoff 中的当前上下文、最终目标、当前阶段目标、状态、规则、禁止事项、证据缺口；
2. 如果存在 todolist.md，确认其中的最终目标、当前阶段目标、大方向 TodoList、当前 P0、下一步原子任务；
3. 后续按 todolist.md 推进主线，按 handoff-current.md 遵守上下文、证据和边界。

要求：
- 不要重新发散。
- 不要重复已经完成的工作。
- 不要继承旧窗口中的错误尝试。
- 如果发现冲突或证据不足，先指出。

handoff-current.md 内容如下：

【粘贴 handoff-current.md】

如果有 todolist.md，继续粘贴如下：

【粘贴 todolist.md】
```
