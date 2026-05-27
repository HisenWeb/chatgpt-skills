# 模板：生成 Skill 触发提示词

适用场景：

- 需要为某个 Skill 生成一条可复制的启动 Prompt；
- 需要检查已有启动 Prompt 是否仍匹配当前 Skill / Template；
- 只想稳定触发 Skill，不想把 Skill 正文规则重复写进 Prompt。

复制使用：

```text
请使用 GitHub 工具读取我的 ChatGPT Skill 仓库：
https://github.com/HisenWeb/chatgpt-skills

读取顺序：
1. 先读 SKILL_INDEX.md。
2. 根据我指定的目标 Skill，判断当前任务是否适合生成触发提示词。
3. 只读取目标 Skill，以及索引或目标 Skill 明确关联的直接 Template / Skill。
4. 不要全量读取所有文件。
5. 本次任务是生成触发提示词，不是执行目标 Skill。

目标 Skill：
【填写目标 Skill 路径，例如：skills/04-handoff-regular.md】

请为该 Skill 生成一份可复制使用的触发提示词。

要求：
1. 触发提示词只负责稳定路由到目标 Skill。
2. 不要重复目标 Skill 的完整正文、输出结构、禁止事项或细节规则。
3. 必须包含：读取 SKILL_INDEX.md、适用性判断、不适合则停止、适合则按需读取、启用内容一句话确认。
4. 输出以目标 Skill 规则为准。
5. 如果目标 Skill 不适合做触发提示词，请说明原因，并给出更合适的启动方式。
6. 最后简短说明哪些内容被刻意排除，以避免和 Skill 重复。