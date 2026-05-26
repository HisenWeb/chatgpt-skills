# ChatGPT Skill Index：Handoff 专区

## 目的

本索引用于帮助 ChatGPT 在不同换窗口场景中选择正确的 Handoff Skill。

不要全量读取所有文件。先根据当前任务判断需要读取哪个 Skill 和哪个模板。

## 优先级

1. 用户当前窗口的明确指令
2. 当前任务直接相关的 Skill
3. Handoff 模板
4. 其他长期规则

如果规则冲突，必须说明冲突点，并优先采用用户当前明确指令。

## Skill 列表

### 04-handoff-regular.md

路径：

`skills/04-handoff-regular.md`

名称：

常规新窗口交接与 Handoff

适用场景：

- 当前窗口主题相对集中；
- 当前窗口仍然可靠；
- 用户只是普通准备换窗口；
- 需要生成当前状态快照；
- 不需要从完整旧聊天记录做去毒蒸馏。

不适用场景：

- 旧窗口很长、很乱、跨主题严重；
- 用户认为旧窗口已经降智、复读、顺从或越改越乱；
- 用户会把完整聊天记录放到中转窗口；
- 需要从旧聊天导出材料生成 handoff-current.md。

推荐模板：

`templates/handoff-regular-current-window.md`

---

### 04b-handoff-distillation.md

路径：

`skills/04b-handoff-distillation.md`

名称：

中转窗口去毒蒸馏与 Handoff

适用场景：

- 用户明确说明这是中转窗口；
- 用户上传或粘贴完整旧聊天记录；
- 需要从旧窗口材料生成 handoff-current.md；
- 需要剔除旧窗口中的 AI 脑补、错误尝试、顺从性结论、临时妥协；
- 需要基于旧 handoff + 完整聊天记录滚动生成新的 handoff-current.md。

不适用场景：

- 当前窗口只是普通轻量换窗；
- 不需要读取完整旧聊天记录；
- 当前窗口仍然可靠，直接生成当前状态快照即可。

推荐模板：

`templates/handoff-distill-from-chat-export.md`

## 新窗口读取 handoff 模板

当 handoff-current.md 已经生成后，新工作窗口只需要读取 handoff，不需要读取旧聊天全文。

文件版：

`templates/new-window-read-handoff-file.md`

剪贴板版：

`templates/new-window-read-handoff-clipboard.md`
