# ChatGPT Skill Index

本仓库是用户为 ChatGPT 准备的长期工作规则库。

## 使用原则

1. 不要全量读取所有 Skill。
2. 先根据当前任务判断需要启用哪些 Skill。
3. 优先读取与当前任务直接相关的 Skill。
4. 如果 Skill 之间冲突，优先级如下：
   - 用户当前明确指令
   - 本窗口主题相关 Skill
   - 总控与质量守门 Skill
   - 其他辅助 Skill

## Skill 列表

### 01-control-reviewer.md

名称：总控与质量守门

路径：

`skills/01-control-reviewer.md`

适用场景：

- 技术方案选择
- 产品 / 工程方向判断
- 用户带强假设推进方案
- 架构收敛
- 工具选型
- Agent / Workflow / Skill / Prompt 设计
- 工程修复方向判断

启用方式：

只要当前任务涉及判断、收敛、风险识别，就应启用。

## 新窗口建议提示

```text
请读取我的 ChatGPT Skill 仓库：
https://github.com/HisenWeb/chatgpt-skills

读取顺序：
1. 先读 SKILL_INDEX.md
2. 根据当前任务判断需要启用哪些 Skill
3. 只读取相关 Skill，不要全量读取所有文件
4. 读取后用一句话确认启用的 Skill 名称

当前窗口主题：
【填写当前主题】