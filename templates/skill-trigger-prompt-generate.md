# 模板：生成 Skill 触发提示词

适用场景：

- 为指定 Skill 生成一条可复制的启动 Prompt；
- 检查已有启动 Prompt 是否仍匹配当前 Skill / Template；
- 只想稳定触发 Skill，不想把 Skill 正文规则重复写进 Prompt。

前置条件：

- 已通过 `SKILL_INDEX.md` 启用 `skills/00-skill-authoring.md`；
- 已读取目标 Skill，或已提供目标 Skill 路径并允许按需读取。

复制使用：

```text
当前任务：为指定 Skill 生成 / 评审触发提示词。

目标 Skill：
【填写目标 Skill 路径，例如：skills/04-handoff-regular.md】

使用场景：
【GitHub 冷启动版 / 已加载仓库轻量版 / 不确定】

已有触发提示词（可选）：
【没有则留空】

要求：
1. 本次只生成 / 评审触发提示词，不执行目标 Skill。
2. 先确认目标 Skill 是否存在、是否已读取；证据不足时不要凭空生成。
3. 按使用场景决定触发提示词是否包含 GitHub / SKILL_INDEX 读取链路：
   - GitHub 冷启动版：可以包含；
   - 已加载仓库轻量版：不要包含；
   - 不确定：输出两个版本，并标明适用条件。
4. 触发提示词只负责稳定路由到目标 Skill，不重复目标 Skill 的完整正文、输出结构、禁止事项或长流程细节。
5. 最后简短说明哪些内容被刻意排除，以避免和 Skill 正文重复。
```
