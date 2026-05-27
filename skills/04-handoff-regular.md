---
name: 常规新窗口交接与 Handoff
version: 0.2.0
status: active
last_updated: 2026-05-27
scope: 当前窗口交接 / 轻量换窗 / handoff-current.md / handoff-evidence.md / 已启用 todolist.md 的识别与同步
---

# ChatGPT 专属 Skill：常规新窗口交接与 Handoff

## 触发场景

当用户明确提出以下需求时，启用本 Skill：

- 生成 handoff / 新窗口交接文档；
- 准备普通换窗口；
- 整理当前窗口继续工作的上下文；
- 基于当前窗口生成 `handoff-current.md`；
- 基于当前窗口生成 `handoff-evidence.md`；
- 当前持续任务已经启用 `todolist.md`，需要在换窗口时同步更新。

注意：触发意图不等于一定适合常规版。生成前必须先做适用性判断。

## 不触发场景

以下情况不要启用本 Skill：

- 用户只是一次性问答、简单解释或临时帮助；
- 用户只是评审、修改、重构、调试 handoff Skill / Template / Prompt；
- 用户在新工作窗口上传或粘贴已有 handoff，要求读取、确认或继续工作；
- 用户明确要求从完整旧聊天记录、旧窗口导出文件或旧 handoff 中做去毒蒸馏；
- 当前窗口已经很长、很乱、跨主题严重，或用户认为当前窗口已降智、复读、顺从、胡乱修复。

如需从旧窗口完整材料中剔除污染并生成新 handoff，应改用 `skills/04b-handoff-distillation.md`。

## 核心定位

常规 handoff 只适用于：当前窗口仍可靠、主题相对集中、关键结论没有明显冲突。

它的目标是生成下一窗口继续工作所需的当前状态快照与证据材料包：

- `handoff-current.md`：当前上下文快照；
- `handoff-evidence.md`：可迁移证据、原始材料定位、补充材料清单；
- `todolist.md`：仅当持续任务已经启用 TodoList 且用户提供了当前文件时同步更新。

本 Skill 不重新定义 TodoList 语义。涉及 TodoList 时，必须引用并遵守 `skills/04a-goal-todolist.md`。

## 工作原则

### 1. 先做 Handoff 生成审核卡

生成文件前，先输出简短审核卡，停止等待用户确认，除非用户明确要求直接生成。

审核卡默认结构：

```text
Handoff 生成审核卡：
- 当前任务类型：生成 / 读取 / 评审 / 修改 / 不适用
- 是否适合常规 handoff：是 / 否
- 是否需要中转蒸馏：是 / 否
- 是否检测到配套 TodoList：是 / 否 / 不确定
- 是否需要生成 handoff-evidence.md：是 / 否
- 是否缺少关键原始材料：是 / 否
- 建议动作：直接生成 / 补充材料 / 改用中转蒸馏 / 本次只做评审
```

如果判断为读取、评审、修改或不适用，不要继续生成 handoff 文件。

### 2. 输出当前状态快照，不写聊天流水账

`handoff-current.md` 应保留下一窗口继续工作必须知道的内容：

- 当前主题；
- 最终目标；
- 当前阶段目标；
- 当前状态；
- 已确认结论；
- 与当前主题相关的用户偏好与长期规则；
- 禁止事项 / 废弃路径；
- 关键文件、路径、命令或名称；
- 证据与复核要求；
- 冲突 / 待确认；
- 下一步原子任务；
- 如已启用 TodoList，只摘要其当前主线、阶段、P0 和读取要求。

应删除或压缩：

- 已解决且无后续影响的过程；
- 重复讨论；
- 情绪性表达；
- 与当前继续工作无关的工具探索；
- 证据细节正文。

证据细节放入 `handoff-evidence.md`，不要塞满 `handoff-current.md`。

### 3. 默认同时生成证据材料包

生成 `handoff-current.md` 时，默认同时生成 `handoff-evidence.md`。

`handoff-evidence.md` 只整理当前窗口中可见、可摘录、可说明来源的证据，包括：

- 用户明确确认；
- 已粘贴的日志、报错、diff、命令输出；
- 已读取文件、Prompt、Skill、模板的关键摘录和读取范围；
- 已讨论并稳定识别的图片 / 截图信息；
- 原始材料定位卡；
- 新窗口必须重新上传或补充的材料；
- 证据缺口和复核方式。

证据必须可迁移、可复核。无法自动携带或无法复核的材料，必须写入补充材料清单。

### 4. 自动识别 TodoList，但不强行创建

生成 handoff 前，判断当前任务是否已经启用 `todolist.md`。

判定依据包括：

- 用户提供了 `todolist.md`；
- 当前窗口或旧 handoff 明确声明存在配套 TodoList；
- 当前上下文持续引用 `todolist.md`、主线推进账本、大方向 TodoList、P0 等；
- 用户明确要求按 TodoList 延续。

处理规则：

- 未检测到 TodoList：只生成 `handoff-current.md` 和 `handoff-evidence.md`；
- 检测到 TodoList 且用户提供了文件：按 `04a-goal-todolist.md` 同步输出更新后的 `todolist.md`；
- 检测到 TodoList 但用户未提供文件：完整交接应先提醒补充；若用户明确只要 handoff，则可继续，但必须记录 TodoList 未同步及影响；
- 当前请求只是评审或修改 handoff Skill / Template / Prompt 时，不进入 TodoList 同步流程。

### 5. 区分事实、判断和待确认

handoff 中必须区分：

- 已确认事实；
- 用户明确偏好；
- 当前判断；
- 待确认事项；
- 冲突或不确定点。

项目事实需要仓库、执行端、日志、截图或测试结果验证时，必须标为待复核，不能写成已确认事实。

### 6. 多轮滚动时防止越滚越大

如果用户提供旧 handoff 或旧 TodoList，并要求生成新文件：

1. 以最新可信文件为基线；
2. 合并当前窗口新增的有效事实；
3. 删除或归档已完成、已过期、已解决或无后续影响的内容；
4. 不拼接旧文件原文；
5. 新文件必须是当前状态快照、证据材料包和主线推进账本，而不是历史合集。

## 推荐输出文件

默认输出：

```text
handoff-current.md
handoff-evidence.md
```

如果当前任务已经启用 TodoList，且用户提供了 `todolist.md`，同时输出：

```text
todolist.md
```

如果同时输出两个或以上文件，优先生成 `.zip`。

## 推荐输出结构

### handoff-current.md

```markdown
# Handoff Current

## 0. 适用性判断
## 1. 当前主题
## 2. 最终目标
## 3. 当前阶段目标
## 4. 当前状态
## 5. 已确认结论
## 6. 用户偏好与长期规则
## 7. 禁止事项 / 废弃路径
## 8. 关键文件 / 路径 / 名称
## 9. 证据材料包
## 10. 证据与复核要求
## 11. 冲突 / 待确认
## 12. 配套 TodoList（仅在已启用时保留）
## 13. 下一步原子任务
```

### handoff-evidence.md

优先使用 `templates/handoff-evidence-pack.md` 的结构，但允许按实际材料压缩为空表或简表。至少包含：

1. 本文件用途；
2. 已整理证据；
3. 原始材料定位；
4. 新窗口需要重新上传 / 补充的材料；
5. 证据缺口 / 待复核；
6. 不需要携带的材料。

## 输出风格

- 中文；
- 结论先行；
- 高密度；
- 少背景；
- 不写流水账；
- 明确不确定点；
- 下一步必须原子化；
- 证据细节放入 `handoff-evidence.md`；
- 优先输出 `.md` 文件；多个文件优先 `.zip`。

## 禁止事项

- 禁止把 handoff 写成聊天摘要或历史合集。
- 禁止把旧 handoff 原文拼接进新 handoff。
- 禁止省略必要的 `handoff-evidence.md`。
- 禁止把不可迁移、不可复核的材料写成已携带证据。
- 禁止强行创建不存在的 TodoList。
- 禁止检测到已有 TodoList 却忽略同步或缺口说明。
- 禁止在本 Skill 内重新定义 TodoList 语义。
- 禁止为了整洁隐藏冲突或证据缺口。
