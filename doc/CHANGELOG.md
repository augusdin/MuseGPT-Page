# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- 

### Fixed
- shadow dom 使用svg在某些站点导致冲突(待完成)

### Changed
- 

## [1.0.0-beta.3] - 2023-7-13

### Added
- Automatic extraction and analysis of YouTube video subtitles
- Automatic extraction and analysis of Bilibili video subtitles
- Download extracted subtitles from YouTube or Bilibili as srt files
- Added loading page indicator

### Fixed
- Conflict resolution of using SVG in shadow DOM (to be completed)
- Resolved issues with unresponsive icon clicks under certain circumstances

### Changed
- Optimized update logic for the plugin, auto-refreshing existing pages after registration to avoid failure in popping up the panel
- Enhanced pop-up logic with loading and auto pop-up features to prevent unavailability due to the unprepared status of potential pages
- Optimized prompts for video websites' subtitles

### Added
- 自动提取youtube视频字幕进行视频内容分析
- 自动提取bilibili视频字幕进行视频内容分析
- 下载提取成功的youtube或bilibili字幕为srt文件
- 增加页面加载中提示

### Fixed
- shadow dom 使用svg冲突处理(待完成)
- 解决某些情况下点击图标无响应问题

### Changed
- 优化插件更新逻辑,注册后自动刷新已有页面以避免弹出面板失败
- 优化弹出逻辑,增加等待页面加载及加载完成后自动弹出逻辑,以避免在可能的页面未准备好时点击图标无法弹出问题
- prmopt 针对视频网站字幕进行优化

## [1.0.0-beta.2] - 2023-7-8

### Added
- Introduced Command+Shift+X shortcut for panel display (Ctrl+Shift+X for Windows)
- Implemented multilingual support (Chinese and English available, more languages coming)
- Added support for markdown format display

### Fixed
- Resolved the issue where switching between other Prompts during summary generation leads to loss of streaming output status
- Addressed the issue of non-initialization of Prompt-related configurations after completion of the installation wizard
- Fixed potential content generation bugs

### Changed
- Enhanced webpage content extraction logic to improve accuracy of content summary
- Optimized configuration initialization logic
- Significantly boosted performance of streaming output content display

### Added
- 新增Command+Shift+X快捷键呼出面板(Windows下为Ctrl+Shift+X)
- 新增多语言支持(已支持中、英文，其他语言版本陆续推出)
- 增加markdown格式显示支持

### Fixed
- 解决在生成摘要过程中切换其他Prompt会导致流式输出状态丢失问题
- 解决完成安装向导后,不会初始化Prompt相关配置的问题
- 解决潜在的内容生成bug

### Changed
- 优化网页内容提取逻辑,提升页面内容总结准确度
- 优化配置初始化逻辑
- 显著提升流式输出内容显示性能
