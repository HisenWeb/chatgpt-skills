# 模板：新窗口读取 Handoff 剪贴板版

适用场景：

- `handoff-current.md` 已经生成；
- `handoff-evidence.md` 可能已经同时生成；
- 用户不上传文件，而是直接把 handoff 内容粘贴到新窗口；
- 可选：同一持续任务还会粘贴 `todolist.md`；
- 需要新窗口自动识别是否存在或应存在配套 TodoList 与 Evidence Pack。

复制到新工作窗口使用：

```text
我们继续上一个窗口的主题。下面是 handoff-current.md，后面可能还会粘贴 handoff-evidence.md 和 todolist.md。

请先阅读 handoff-current.md，并自动判断是否存在配套 handoff-evidence.md 和 todolist.md。

读取规则：
1. 必须先读 handoff-current.md。
2. 如果后面提供了 handoff-evidence.md，必须继续读取 handoff-evidence.md。
3. 如果后面提供了 todolist.md，必须在 handoff-current.md 和 handoff-evidence.md 之后读取 todolist.md。
4. 如果 handoff-current.md 声明存在 handoff-evidence.md，但我没有粘贴，请先提醒我补充；如果我明确说暂时没有，则继续时必须标记证据材料包缺失。
5. 如果 handoff-current.md 中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有粘贴 todolist.md，请先提醒我补充。
6. 如果 handoff-current.md、handoff-evidence.md 与 todolist.md 冲突，先指出冲突，不要自行合并。

请确认：
1. handoff-current.md 中的当前上下文、最终目标、当前阶段目标、状态、规则、禁止事项、证据缺口；
2. handoff-evidence.md 中已摘录的证据、原始材料定位卡、图片证据卡、新窗口需要重新上传 / 补充的材料；
3. 如果存在 todolist.md，确认其中的最终目标、当前阶段目标、大方向 TodoList、当前 P0、下一步原子任务；
4. 后续按 todolist.md 推进主线，按 handoff-current.md 遵守上下文，按 handoff-evidence.md 处理证据和补充材料。

要求：
- 不要重新发散。
- 不要重复已经完成的工作。
- 不要继承旧窗口中的错误尝试。
- 不要假设旧窗口附件、图片、zip、源码包已经自动迁移。
- 如果发现冲突、证据不足或缺少原始材料，先指出并告诉我需要补充什么。

handoff-current.md 内容如下：

【粘贴 handoff-current.md】

如果有 handoff-evidence.md，继续粘贴如下：

【粘贴 handoff-evidence.md】

如果有 todolist.md，继续粘贴如下：

【粘贴 todolist.md】
```
