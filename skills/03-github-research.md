---
name: GitHub 项目调研与外部佐证复核
version: 0.2.1
status: active
last_updated: 2026-05-28
scope: GitHub 项目调研 / 需求澄清 / 范围收窄 / 分类优先搜索 / 候选防漏检 / 轻重分桶 / 多维可靠性复核 / 外部网页佐证
---

# ChatGPT 专属 Skill：GitHub 项目调研与外部佐证复核

## 触发场景

当用户提出以下需求时，启用本 Skill：

- 想在 GitHub 上找现成项目、库、工具、插件、框架或模板；
- 想判断某个 GitHub 项目是否靠谱、是否活跃、是否适合使用；
- 想比较多个 GitHub 仓库；
- 想从 GitHub 生态中调研某类能力的主流实现；
- 想查找某类工具的替代方案、同类项目或更轻量方案；
- 想避免被 stars 高但停更、文档虚、issue 堆积、使用成本过高或不可用的项目误导；
- 想以 GitHub 仓库为主证据，并允许使用外部网页做佐证。

## 不触发场景

以下情况不要强行启用本 Skill：

- 泛互联网调研，且主线不是 GitHub；
- 新闻、政策、价格、论文、产品市场等非 GitHub 主题调研；
- 用户只是要求翻译、改写、格式整理；
- 用户只是要修复当前项目代码；
- 用户已经指定只读取某个本地文件或当前聊天内容；
- 用户明确禁止联网或禁止搜索外部资料；
- Skill 仓库维护任务，此类任务应交给 `skills/00-skill-authoring.md`；
- 总控方案判断但不需要 GitHub 项目证据时，优先交给 `skills/01-control-reviewer.md`。

## 核心定位

本 Skill 不是“GitHub 搜索结果列表生成器”。

本 Skill 的目标是：

> 先澄清用户真实需求，再以 GitHub 为主证据源，通过“需求澄清 → 范围收窄 → 分类定位 → 关键词校准 → 多路候选发现 → 轻重分桶 → 多维复核 → 外部佐证 → 分级建议”的流程，筛出最少、最稳、最贴合的候选项目。

GitHub 调研的重点不是找最多项目，而是筛掉：

- 和用户目标不匹配的项目；
- 工具形态过重的项目；
- 停更或维护弱的项目；
- README 营销强但缺少可运行证据的项目；
- issue / PR 风险明显的项目；
- toy project 或 demo project；
- stars 高但当前不可用的项目；
- 需要云服务、向量库、MCP、后台服务等重依赖，但用户并未接受的项目。

宁可少推荐，也不要把证据不足、维护停滞、使用成本过高或不匹配的项目包装成可用方案。

## 工作原则

### 1. 先需求澄清，再开始调研

默认不要一上来搜索。

必须先判断用户需求是否已经足够清楚。如果不清楚，先做一轮需求澄清和范围收窄。

澄清重点包括：

- 用户真实目标；
- 项目类型和运行环境；
- 可接受工具重量；
- 明确排除项；
- 输出偏好和调研深度。

如果用户明确要求直接开始，或者上下文已经足够判断，可以继续调研，但必须先声明默认假设。

默认假设应优先偏向：轻量、本地、低侵入、适合个人项目使用、优先避免重服务。

需要固定启动卡或输出结构时，读取并使用 `templates/github-research.md`。

### 2. 先收窄范围，不要把不同工具混在一起比较

同一个 GitHub 调研主题下，可能包含多个工具形态。必须先分桶，再比较。

常见分桶包括：

- 轻量上下文打包；
- 代码图谱 / codemap / knowledge graph；
- AI coding agent 上下文 / Skill 生成；
- 语义检索 / MCP / 持续上下文；
- 团队级 code intelligence 平台。

不同桶不能直接按 stars 横向比较。

默认推荐顺序应根据用户目标决定。若用户没有明确接受重方案，默认优先轻量 CLI、本地文件产物、本地图谱和 agent 上下文生成；默认降权 MCP、向量库、后台索引服务和团队级平台。

### 3. 分类优先，但必须服务于已收窄的需求

确定需求范围后，先从 GitHub 分类入口建立领域地图，而不是直接用用户原话搜 repo。

可用分类入口包括：

- GitHub Topics；
- language；
- ecosystem；
- org；
- awesome list；
- curated / featured topics；
- 相关项目 README 中的 related projects / alternatives。

分类入口的作用是发现领域，不是证明项目靠谱。

禁止把 GitHub Topic 当作项目可靠性证据。

### 4. 从分类结果中校准关键词

关键词不能只来自用户原话。

必须从分类和候选结果中提取：

- 常用 topic；
- 同义词；
- 项目常见命名方式；
- 生态内真实术语；
- 相关技术栈；
- 替代方案名称；
- 已知项目名；
- related projects / alternatives 中出现的词。

用户表达不一定等于 GitHub 生态真实分类词。比如“代码图谱”不应只搜 `codemap`，还应校准为 code graph、repository map、knowledge graph、call graph、dependency graph、codebase analysis、repository analysis、code indexing、static analysis 等方向。

### 5. 候选发现必须多路搜索，防止漏检

禁止只跑一组关键词后就下结论。

至少使用以下四路发现方式：

- 分类入口：topic / language / ecosystem / awesome list / curated list；
- 功能词：codebase graph、repository graph、code map、repo map、knowledge graph codebase、import graph、call graph、semantic code search、repository analyzer 等；
- 已知候选名：用户提到的项目名、同义项目名、社区常见项目名；
- 反向发现：README alternatives、related projects、awesome lists、package 页面、文档中的同类工具。

如果用户点名某些候选，例如 `graphify`、`GitNexus`，必须把它们纳入候选复核，不能只依赖通用关键词搜索。

### 6. Repo 搜索后必须先做硬过滤

候选仓库进入详细评估前，先做硬过滤。

默认排除或降权：

- archived；
- 最近 6 个月无 commit / release，除非工具非常稳定且无需维护；
- README 很空，只有口号，没有安装和最小使用；
- 没有 license；
- 明显是 demo、toy project、课程作业或一次性实验；
- 需要复杂服务，但用户要轻量；
- 需要云服务 / API key / 向量数据库，但用户未接受；
- issue 中存在安装失败、不可用、Windows 问题、安全问题，且长期无人处理；
- 项目定位与用户目标不一致；
- 仅靠高 stars 支撑，但当前维护状态差。

有 bug 不等于不靠谱；严重 bug 长期无人回应才是高风险。

### 7. 多维度复核候选项目

每个候选项目至少从以下维度判断：

- 需求匹配度：是否真正解决用户的问题，是否对应用户收窄后的工具形态；
- 工具重量：是否一次性 CLI、是否需要服务 / MCP / 数据库 / 云账号、是否侵入项目结构；
- 维护活跃度：archived、最近 commit / release、issue 回复、PR 合并、maintainer 活跃度；
- 文档与可上手性：README、安装步骤、最小示例、配置说明、限制说明、文档是否过期；
- 工程成熟度：release、changelog、测试、CI、license、package metadata、examples / docs、平台支持；
- 风险信号：not working、broken、install failed、deprecated、unmaintained、security concern、Windows、large repo、memory、performance、stale index 等。

### 8. 外部网页只能做佐证，不能反客为主

外部网页可以搜索，但只能用于支持、反驳或补充 GitHub 判断。

可用外部佐证包括：

- 项目官网；
- 官方文档；
- npm / PyPI / VS Code Marketplace / Chrome Web Store；
- 维护者博客；
- release notes；
- 社区讨论；
- 替代项目文章；
- fork 或生态迁移说明。

每条外部证据必须说明：

- 它支持了哪个 GitHub 判断；
- 它反驳了哪个 GitHub 判断；
- 它是否比 GitHub README / release 更新；
- 它是官方、维护者、第三方还是社区来源。

禁止因为某篇文章说“好用”就直接推荐项目。

### 9. 推荐排序不能按 stars

stars 只能作为辅助指标。

推荐排序优先级：

1. 需求匹配度；
2. 工具重量匹配；
3. 当前可用性；
4. 维护活跃度；
5. 文档完整度；
6. 工程成熟度；
7. issue / PR 风险信号；
8. 外部佐证；
9. 生态影响力；
10. stars。

高 stars 但停更、重型、风险大、不匹配的项目，应降权。

stars 不高但轻量、近期维护、文档清楚、适合用户目标的项目，可以进入候选。

### 10. 结论必须保守，不要为了凑数量推荐

如果证据不足，应明确说证据不足。

如果项目风险明显，应标为：推荐、可试用、谨慎、不推荐、仅作参考、历史项目、候选但需实测。

不要把不活跃、不可用、文档不清、issue 风险明显或过重的项目包装成成熟方案。

## 输出要求

优先结论先行，明确调研范围、默认假设、分类定位、候选分桶、分级建议、风险和下一步。

如果需求不够明确，先输出简短的调研启动确认卡，不要直接进入大范围搜索。

如果需要正式调研结构、项目证据卡、搜索路径记录或单个 repo 评估结构，读取并使用 `templates/github-research.md`。

输出中必须区分：

- 已确认 GitHub 仓库事实；
- 外部网页佐证；
- 基于证据的判断；
- 仍需实测或证据不足的部分。

## 禁止事项

- 禁止不澄清需求就默认开始大范围调研。
- 禁止一上来用用户原话搜索 repo 并直接推荐。
- 禁止只跑一组关键词后就下结论。
- 禁止漏掉用户点名的候选项目。
- 禁止只按 stars 排序推荐。
- 禁止把 GitHub Topic 当作项目可靠性证据。
- 禁止把不同工具形态混在一个榜单里直接比较。
- 禁止忽略工具重量。
- 禁止把重型平台推荐给只需要轻量方案的用户。
- 禁止只看 README 口号就判断项目可用。
- 禁止忽略 archived、长期停更、issue 堆积等风险。
- 禁止把外部网页评价当作主证据。
- 禁止把社区单条观点当作事实。
- 禁止隐藏证据不足。
- 禁止把 toy project 包装成成熟方案。
- 禁止为了凑数量推荐低质量项目。
- 禁止把 GitHub 调研扩展成泛互联网调研。
