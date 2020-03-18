(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{286:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#生成一个新的-ssh-key"}},[s._v("生成一个新的 SSH Key")])]),a("li",[a("a",{attrs:{href:"#将-ssh-key-添加到不同的代理"}},[s._v("将 SSH Key 添加到不同的代理")])]),a("li",[a("a",{attrs:{href:"#测试配置是否成功"}},[s._v("测试配置是否成功")])]),a("li",[a("a",{attrs:{href:"#参考"}},[s._v("参考")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"生成一个新的-ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成一个新的-ssh-key"}},[s._v("#")]),s._v(" 生成一个新的 SSH Key")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令生成 ssh-key，需要指定相应的邮箱")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/you/.ssh/id_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("如果不更改文件名直接回车"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推荐不使用默认文件名 id_rsa ，按实际场景重新命名文件名称，比如：/Users/you/.ssh/id_rsa_github_my")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter passphrase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("输入密码，回车"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter same passphrase again: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("再次输入密码，回车"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n$ ll /Users/you/.ssh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到刚刚生成的 ssh-key id_rsa_github_my 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制对应 id_rsa_github_my.pub 内容添加至 WEB 端配置 SSH 内容地方即可。")]),s._v("\n")])])]),a("h2",{attrs:{id:"将-ssh-key-添加到不同的代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-ssh-key-添加到不同的代理"}},[s._v("#")]),s._v(" 将 SSH Key 添加到不同的代理")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /Users/you/.ssh/config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Host : Host 可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和 ssh 文件（可以直接填写 ip 地址）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HostName : 要登录主机的主机名（建议与 Host 一致）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User : 登录名（如 gitlab 的 username）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# IdentityFile : 指明上面 User 对应的 identityFile 路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Port: 端口号（如果不是默认 22 号端口则需要指定）")]),s._v("\n\nHost github.com\nHostName github.com\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa_github_my\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n\nHost dev-git.gaolvzongheng.com\nHostName dev-git.gaolvzongheng.com\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa_github_gaolvgo\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n\nHost "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.3")]),s._v(".177.8\nHostName "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.3")]),s._v(".177.8\nPreferredauthentications publickey\nIdentityFile ~/.ssh/id_rsa_github_gaolvgo\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n")])])]),a("h2",{attrs:{id:"测试配置是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试配置是否成功"}},[s._v("#")]),s._v(" 测试配置是否成功")]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ .ssh "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\nEnter passphrase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/liwei/.ssh/id_rsa_github_my'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\nHi GourdErwa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You've successfully authenticated, but GitHub does not provide shell access.\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-Generating a new SSH key and adding it to the ssh-agent"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);