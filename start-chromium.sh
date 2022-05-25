#禁止显示器休眠
xset dpms 0 0 0
xset s off

#Hide the mouse from the display
unclutter &

#If Chrome crashes (usually due to rebooting), clear the crash flag so we don't have the annoying warning bar
#Linux sed的命令使用可以参考网上的资料，主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences
#删除chrome临时目录
rm -r /home/pi/.config/chromium -f

# matchbox-window-manager -use_cursor no -use_titlebar no &

# Auto run Chromium, https://www.cnblogs.com/superelement/p/9199103.html
chromium-browser \
`# 非ROOT用户系统要求`\
--no-sandbox \
`# 类似全品模式`\
--kiosk \
`# 屏幕大小，不确定是否有用`\
--window-size=1024,600 \
`# 隐身模式`\
--incognito \
`# 禁止渲染器进程中的挂起监视器对话框`\
--disable-hang-monitor \
`# 跳过“初次运行”任务，实际上是否是“初次运行”`\
--no-first-run \
`# 禁用Web通知和推送API`\
--disable-notifications \
`# 防止信息栏出现`\
--disable-infobars \
`# 在首次运行时禁用默认应用程序的安装。在自动测试期间使用`\
--disable-default-apps \
`# 禁用默认浏览器检查。对于我们希望避免显示默认浏览器信息栏的UI/浏览器测试很有用`\
--no-default-browser-check \
`# 禁用将浏览器数据同步到Google帐户`\
--disable-sync \
`# 禁用扩展程序`\
--disable-extensions \
`# 禁用插件`\
`# --disable-plugins \\`\
`# Specifies the flags passed to JS engine`\
--js-flags=--random-seed=1157259157 \
`# 默认情况下，https 页面不允许从 http 链接引用 javascript/css/plug-ins。添加这一参数会放行这些内容`\
--allow-running-insecure-content \
`# 不遵守同源策略`\
--disable-web-security \
`# 在设备允许的情况下，通过硬件覆盖启用合成单个元素`\
`# --enable-hardware-overlays \\`\
`# ?`\
--enable-threaded-compositing \
`# ?`\
--disable-speech-input \
`# ?`\
--disable-audio-output \
`# 禁用WebSpeechAPI`\
--disable-speech-api \
`# 停用 Dart`\
--disable-dart \
`# 启用直接写入与磁贴关联的GPU内存的光栅化器`\
--enable-zero-copy \
`# ?`\
--disable-gpu-vsync \
"/home/pi/zwvc-rff-reveal/index.html"
