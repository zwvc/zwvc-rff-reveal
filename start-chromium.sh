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

#Auto run
# https://www.cnblogs.com/superelement/p/9199103.html
chromium-browser \
--no-sandbox \
--window-size=1024,600 \
--kiosk \
--incognito \
--disable-client-side-phishing-detection \
--disable-component-extensions-with-background-pages \
--disable-default-apps \
--disable-extensions \
--mute-audio \
--no-default-browser-check \
--no-first-run \
--use-fake-device-for-media-stream \
--allow-running-insecure-content \
--autoplay-policy=user-gesture-required \
--disable-background-timer-throttling \
--disable-backgrounding-occluded-windows \
--disable-features=ScriptStreaming \
--disable-hang-monitor \
--disable-ipc-flooding-protection \
--disable-notifications \
--disable-popup-blocking \
--block-new-web-contents \
--disable-prompt-on-repost \
--disable-renderer-backgrounding \
--js-flags=--random-seed=1157259157 \
--enable-gpu-rasterization \
--force-gpu-rasterization \
--enable-threaded-gpu-rasterization \
--enable-hardware-overlays \
--enable-threaded-compositing \
--disable-gpu-vsync \
--disable-accelerated-2d-canvas \
--disable-speech-input \
--disable-audio-output \
--disable-plugins \
--disable-dart \
--disable-infobars \
--disable-software-rasterizer \
--disable-pings \
--media-router=0 \
--force-renderer-accessibility --disable-quic --enable-tcp-fast-open \
--disable-web-securit \
--ignore-gpu-blacklist \
--enable-zero-copy \
--force-dark-mode \
--enable-features=VaapiVideoDecoder \
--use-gl=desktop \
--force-renderer-accessibility \
--enable-remote-extensions \
--enable-pinch \
--flag-switches-begin \
--enable-gpu-rasterization \
--ignore-gpu-blocklist \
--enable-features=ParallelDownloading \
--flag-switches-end \
"/home/pi/zwvc-rff-reveal/index.html"
