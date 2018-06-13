'指定时间间隔调用.bat文件
'停止脚本请在任务管理器结束wscript.exe
Set ws=wscript.createobject("wscript.shell")
dim bat
'需运行的文件
bat="cmd.exe /c svnUpdate.bat"
do
'0表示不显示窗口，1显示，调试用
ws.run bat,0
'每10秒运行一次
wscript.sleep 10000
loop