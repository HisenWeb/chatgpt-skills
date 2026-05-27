# 模板：新窗口读取 Handoff 文件版

适用场景：

- `handoff-current.md` 已经由常规窗口或中转窗口生成；
- `handoff-evidence.md` 可能已经同时生成；
- 用户在新工作窗口上传 handoff 文件；
- 可选：同一持续任务还配套上传了 `todolist.md`；
- 需要新窗口自动识别是否存在或应存在配套 TodoList 与 Evidence Pack。

复制到新工作窗口使用：

```text
我们继续上一个窗口的主题。我已上传 handoff-current.md，可能也上传了 handoff-evidence.md 和 todolist.md。

请先读取 handoff-current.md，并自动判断是否存在配套 handoff-evidence.md 和 todolist.md。

读取顺序：
1. 必须先读 handoff-current.md。
2. 如果我上传了 handoff-evidence.md，必须继续读取 handoff-evidence.md。
3. 如果我上传了 todolist.md，必须在 handoff-current.md 和 handoff-evidence.md 之后读取 todolist.md。
4. 如果 handoff-current.md 声明存在 handoff-evidence.md，但我没有上传，请先提醒我补充；如果我明确说暂时没有，则继续时必须标记证据材料包缺失。
5. 如果 handoff-current.md 中声明存在“配套 TodoList / todolist.md / 主线推进账本 / 大方向 TodoList”，但我没有上传 todolist.md，请先提醒我补充，不要只根据 handoff 的下一步继续。
6. 如果 handoff-evidence.md 标注了“未完整携带 / 需要外部补充”的关键证据，请先告诉我需要补充什么以及为什么。
7. 如果三个文件冲突，先指出冲突，不要自行合并。

确认内容：
- handoff-current.md 中的当前上下文、最终目标、当前阶段目标、当前状态、已确认结论；
- handoff-current.md 中必须遵守的用户偏好、长期规则、禁止事项 / 废弃路径、证据缺口或待确认问题；
- handoff-evidence.md 中完整可迁移证据、原始材料定位卡、图片证据卡、未完整携带证据和待复核缺口；
- 如果存在 todolist.md，确认其中的最终目标、当前阶段目标、大方向 TodoList、当前 P0、下一步原子任务；
- 后续按 todolist.md 推进主线，按 handoff-current.md 遵守上下文，按 handoff-evidence.md 处理证据和补充材料。

要求：
- 不要重新发散。
- 不要重复已经完成的工作。
- 不要继承旧窗口中的错误尝试。
- 不要假设旧窗口附件、图片、zip、源码包已经自动迁移。
- 如果发现缺少原始材料、截图、附件、日志、diff、测试结果，先明确告诉我需要上传什么以及为什么。
- 确认后再继续工作。
```
