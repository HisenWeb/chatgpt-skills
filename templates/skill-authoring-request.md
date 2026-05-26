# 模板：请求生成或修改 ChatGPT Skill

适用场景：

- 想新增一个 Skill；
- 想修改已有 Skill；
- 想判断某条规则应该放入 Skill、Template、README、SKILL_INDEX，还是不应该进入仓库；
- 想更新 `SKILL_INDEX.md`、`README.md` 或 `scripts/doctor.mjs`。

复制使用：

```text
请启用 ChatGPT Skill：Skill 编写与仓库维护。

我想处理的规则 / 能力是：

【描述你想新增或修改的 Skill / Template / 仓库规则】

请先判断：
1. 它是否应该进入 Skill 仓库；
2. 应该新增 Skill、更新已有 Skill，还是只做 Template；
3. 是否会和已有 Skill 重叠；
4. 推荐文件路径；
5. 是否需要更新 README.md；
6. 是否需要更新 SKILL_INDEX.md；
7. 是否需要更新 scripts/doctor.mjs；
8. 是否需要新增或更新模板；
9. 如果涉及多个文件，推荐完整文件包还是 patch-only 包。

如果适合写入仓库，请生成可直接提交的文件内容。
如果涉及多个文件，请优先生成 zip，并说明 zip 内实际文件清单。
```
