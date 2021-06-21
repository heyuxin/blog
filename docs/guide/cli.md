命令行已经成为程序员必备的一项基础技能 熟练地掌握命令行 可以极大地提升工作效率

man: Manual 意思是手册，可以用这个命令查询其他命令的用法

pwd：Print working directory

su：Swith user 切换用户，切换到root用户

cd：Change directory 切换目录

ls：List files 列出目录下的文件

ps：Process Status 进程状态

mkdir：Make directory 建立目录

rmdir：Remove directory 移动目录

mkfs: Make file system 建立文件系统

fsck：File system check 文件系统检查

cat: Concatenate 串联

uname: Unix name 系统名称

df: Disk free 空余硬盘

du: Disk usage 硬盘使用率

lsmod: List modules 列表模块

mv: Move file 移动文件

rm: Remove file 删除文件

cp: Copy file 复制文件

ln: Link files 链接文件

fg: Foreground 前景

bg: Background 背景

chown: Change owner 改变所有者

chgrp: Change group 改变用户组

chmod: Change mode 改变模式

umount: Unmount 卸载

dd: 本来应根据其功能描述“Convert an copy”命名为“cc”，但“cc”已经被用以代表“C Complier”，所以命名为“dd”

tar：Tape archive 解压文件

ldd：List dynamic dependencies 列出动态相依

insmod：Install module 安装模块

rmmod：Remove module 删除模块

lsmod：List module 列表模块

sudo是superuser do的简写

---

reboot:重启

logout :退出 注销

binary ：二进制

device：设备 手段

etcetera：等等 系统配置文件

recursion：递归（-R）

disrecursion:不递归）（-d）

force:直接覆盖（-f）

all：所有的（-a）

list：列出所有信息（-l）

---

if:提示是否覆盖（-I）

普通文件（-）：文本文件和二进制文件

目录文件（d）：文件夹

连接文件（l）:ln创建的文件

特殊文件：设备文件（b,c）和管道文件（p)

图形界面要注销就从菜单里选择或者快捷键ctrl+alt＋backspace

修改登录界面启动：vi /etc/inittab

3 文本 5 图像

---

使用 man或info 查看有关命令的帮助

使用fdisk -l 显示分区情形；df -h显示磁盘使用情形

使用du -sh /*查看某个(根目录所有文件夹)目录占有磁盘情形

查看linux版本号：uname -a

清屏：clear

检查修复文件系统（非正常关机）：fsck

查找文件：find /etc -name 文件名 （/etc为起始目录）

列出某个目录的详细信息：ls -l /etc(/etc为目录)

当前目录：cd . 上一层目录：cd .. 查看目录路径：pwd

创建目录：mkdir 1(1为文件名)

删除空目录：rmdir 1 删除不为空的目录或文件：rm -r（-f） 1

查看用户信息：vi /etc/passwd

隐式密码：vi /etc/shadow

查看某个文件的内容：cat /etc/inittab

移动文件：mv 1.c /root (移动1.c到root中)

创建文件：vi 1.c

复制文件到指定目录：cp /root/1.c/home/1.c(从root目录复制到home目录下)

比较两个文件：diff 1.c 2.c 或cmp 1.c 2.c

标准用户输入：cat （输入完后安ctrl d退出）


显示重定向：ls -l > ls.txt(显示到ls.txt上；0>输入重定向；1>输出重定向；2>错误重定向)

设置文件的读写权限：chmod u+w 1.c(增加文件拥有者对1.c写的权限)

chmod g-r 1.c( 删除工作组对1.c读的权限)

chmod o+x 1.c(增加其他用户对1.c的执行权限)

chmod a-w 1.c(删除所有用户对1.c写的权限)

列出文件索引好：ls -i

构建软硬连接：in -s /home/lxt008 /008(将lxt008链接至008 即008是lxt008的快捷方式 若无-s就是硬链接)

---

查看DNS客户端配置：more /etc/resolv.conf

查看ip地址：ifconfig(看以上两者的ip是否相符，若不相符 使用下面的命令修改)

更改网络配置：netconfig（修改好后，要使用service network restart重启网络后方能生效）

查看默认路关：route -n

修改默认网关：route add default gw 192.168.88.1(ip和默认网关在同一网段方能联网)

或使用 ifconfig eth0 192.168.88.8 netmask 255.255.255.0 修改ip和子网掩码

结束进程：ctrl+ c(或D)

查看网络状况：netstat

---

查看某个rpm包是否安装：rpm -qi a.rpm

安装某个包：rpm -ivh a.rpm

打包：tar -cvf lxt008.tar /home/lxt008(将home目录下的路线图lxt008文件夹打包成lxt008.tar v是view简写 f为file)

解包：tar -xvf lxt008.tar /home(解压到home中)

查看包的内容：tar -tvf lxt008.tar

打包并压缩：tar -czvf 008.tar.gz /home/lxtoo8

解压包：tar -xzvf 008.tar.gz /home

---

注释掉：#

创建shell脚本：vi first.sh

显示字符串：echo "王林"

等待从终端输入给变量：read f(f为变量)

显示变量内容：echo ${f}

查看环境变量：env

不需要换行：-n

查看运行的进程：ps

杀掉某个线程：kill 1186（1186是线程号）

将某个进程设为后台运行：find / -name passwd &(将find / -name passwd进程设为后台运行)

管道：ls -l /dev | more (列出dev目录下的详细信息 又要分页)

vi编辑器中保存文件：w +文件名

显示行号：：set nu

⌘ command  ⌥ alt(option)  ⇧ shift  ⌃ control

Ctrl + u  剪切光标所在处之前的所有字符（不包括自身）

Ctrl + k  剪切命光标所在处之后的所有字符（包括自身）

Ctrl + y  粘贴

Ctrl + a  跳到行首

Ctrl + e  跳到行尾

ctrl-l: 清屏

ctrl-c: 终止输入，新起一行

ctrl+r: 查找以前的命令

alt+u 把当前词转化为大写

alt+l 把当前词转化为小写

command+d: 新建窗口

nc 网络工具

接受 callback 的不一定是异步，callback 是为了在异步调用后接处理
