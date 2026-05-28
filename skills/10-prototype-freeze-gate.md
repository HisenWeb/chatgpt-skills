---
name: 原型冻结 Gate
version: 0.4.0
status: active
last_updated: 2026-05-29
scope: 原型冻结评审 / 08 与 09 产物一致性检查 / 最终原型交付包打包 / 噪音材料剔除
---

# 10-prototype-freeze-gate — 原型冻结评审与最终打包

## 触发场景

当用户已经拥有 `mvp-business-scope.md`、`prototype-delivery.md` 和最终 `prototype/`，并希望判断是否可以冻结原型、生成最终交付包时，启用本 Skill。

典型触发：

- 用户说“原型冻结”“做冻结评审”“生成最终原型包”“检查 08 和 09 是否一致”；
- 已经完成 `skills/08-mvp-scope-confirmation.md`，并生成 `mvp-business-scope.md`；
- 已经完成 `skills/09-html-prototype-generator.md`，并生成 `prototype-delivery.md` 和最终 `prototype/`；
- 需要剔除旧聊天、截图、日志、diff、草稿和旧版本原型，只保留最终冻结交付物。

## 不触发场景

以下情况不要启用本 Skill：

- 没有 `mvp-business-scope.md`，应先回到 `skills/08-mvp-scope-confirmation.md`；
- 没有 `prototype-delivery.md` 或最终 `prototype/`，应先回到 `skills/09-html-prototype-generator.md`；
- 用户仍在讨论业务范围、页面含义、状态归属、路由表或原型细节；
- 用户要求生成或修改 HTML 原型；
- 用户要求写代码、制定技术方案、开发计划、API、数据库、文件映射或执行端流程；
- 用户要求整理完整证据链、旧聊天、日志、diff 或审计材料。

如果 08 或 09 的正式产物缺失，不要硬冻结，也不要替它们补写；应指出缺失材料并建议回到对应 Skill。

## 核心定位

本 Skill 是原型冻结 Gate。

它只做两件事：

1. 评审 `mvp-business-scope.md`、`prototype-delivery.md` 和 `prototype/` 是否齐全、一致、干净、可冻结；
2. 评审通过且用户明确确认冻结后，打包最终交付物。

最终输出是：

```text
prototype-freeze-delivery.zip
├─ mvp-business-scope.md
├─ prototype-delivery.md
└─ prototype/
```

本 Skill 不重新提炼业务文档，不生成 `prototype-business-brief.md`、`prototype-pages.md` 或 `prototype-flows-interactions.md`。

## 工作原则

### 1. 冻结包必须在评审通过且用户确认后生成

流程必须是：

```text
读取 mvp-business-scope.md + prototype-delivery.md + prototype/
→ 输出冻结评审结果
→ 只有 READY_TO_FREEZE
→ 用户明确确认冻结
→ 才生成 prototype-freeze-delivery.zip
```

未通过评审，或用户未确认冻结前，只输出评审结果、阻塞原因和回退建议，不能生成最终冻结包。

### 2. 只评审和打包，不重写 08 / 09

`mvp-business-scope.md` 是业务范围源。

`prototype-delivery.md` 是原型事实源。

`prototype/` 是最终原型文件源。

本 Skill 不替 08 重写业务范围，不替 09 重写原型事实，不把两者再提炼成新业务说明文档。

### 3. 评审业务范围与原型事实是否一致

重点检查：

- 09 的原型实际页面清单是否覆盖 08 的页面草案核心表达；
- 09 的页面状态归属是否与 08 的页面状态草案冲突；
- 09 的用户流程和关键交互是否表达了 08 的核心业务流程；
- 09 的术语与数据是否与 08 的术语与数据含义冲突；
- 09 的“原型未覆盖 / 待确认”是否存在阻塞性问题。

如果发现冲突，不要自行调和；输出冲突点，判定为 `NEEDS_CONFLICT_RESOLUTION`。

### 4. 只保留最终冻结材料

最终包只包含：

- `mvp-business-scope.md`；
- `prototype-delivery.md`；
- `prototype/` 中最终确认版本的原型文件和必要资源。

禁止把以下内容放进最终包：

- 全量旧聊天；
- 截图清单；
- 调试日志；
- diff；
- 多版草稿；
- 旧版本原型；
- Skill 维护过程；
- “可能有用”的参考材料。

### 5. 不替后续实现者做开发决策

本 Skill 不写开发计划、技术方案、API、数据库、组件拆分、目标文件、项目路径、测试命令或执行端规则。

## 输出要求

### 1. 冻结评审卡

先输出冻结评审卡，不直接打包：

```text
# 原型冻结评审

| 检查项 | 状态 | 说明 |
|---|---|---|
| mvp-business-scope.md | 存在 / 缺失 |  |
| prototype-delivery.md | 存在 / 缺失 |  |
| prototype/ | 存在 / 缺失 |  |
| 原型入口 | 存在 / 缺失 / 无法确认 |  |
| 08 业务范围与 09 原型事实 | 一致 / 有冲突 / 无法确认 |  |
| 阻塞性待确认问题 | 无 / 有 |  |
| 旧版本 / 草稿 / 噪音材料 | 未混入 / 已混入 / 无法确认 |  |

判定：READY_TO_FREEZE / NEEDS_SCOPE_FIX / NEEDS_PROTOTYPE_FIX / NEEDS_CONFLICT_RESOLUTION / NOT_READY / NOT_A_FREEZE_TASK

说明：...
下一步：...
```

### 2. 判定标准

- `READY_TO_FREEZE`：三类材料齐全、一致、干净，没有阻塞性待确认问题，可以冻结；
- `NEEDS_SCOPE_FIX`：`mvp-business-scope.md` 缺失、不完整或业务范围仍不清；
- `NEEDS_PROTOTYPE_FIX`：`prototype-delivery.md` 或 `prototype/` 缺失、不完整，或最终原型仍有断点；
- `NEEDS_CONFLICT_RESOLUTION`：08 业务范围与 09 原型事实存在冲突；
- `NOT_READY`：材料不足或问题过多，不适合冻结；
- `NOT_A_FREEZE_TASK`：当前不是原型冻结评审任务。

### 3. 用户确认冻结后生成最终包

只有当判定为 `READY_TO_FREEZE`，且用户明确确认冻结后，才生成：

```text
prototype-freeze-delivery.zip
├─ mvp-business-scope.md
├─ prototype-delivery.md
└─ prototype/
```

最终回答只列：

- 冻结判定；
- zip 下载链接；
- 包内文件清单；
- 如有非阻塞说明，简短列出。

## 禁止事项

- 禁止在缺少 `mvp-business-scope.md` 时硬冻结。
- 禁止在缺少 `prototype-delivery.md` 或最终 `prototype/` 时硬冻结。
- 禁止在用户未确认冻结前生成 `prototype-freeze-delivery.zip`。
- 禁止重新写一套业务说明文档替代 08 / 09 产物。
- 禁止生成 `prototype-business-brief.md`、`prototype-pages.md`、`prototype-flows-interactions.md`。
- 禁止把旧聊天、截图、日志、diff、旧版本原型或过程材料放进最终包。
- 禁止自行调和 08 与 09 的冲突。
- 禁止写开发计划、技术方案、API、数据库、组件拆分、文件映射、测试命令或执行端规则。
- 禁止绑定任何具体执行工具、规格框架或 agent 工作流。
