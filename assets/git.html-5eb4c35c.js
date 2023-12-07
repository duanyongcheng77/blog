import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-97ba88e8.js";const o={},t=e(`<h1 id="开始使用git" tabindex="-1"><a class="header-anchor" href="#开始使用git" aria-hidden="true">#</a> 开始使用git</h1><h2 id="_1-在使用git前需要先配置好自己的密钥" tabindex="-1"><a class="header-anchor" href="#_1-在使用git前需要先配置好自己的密钥" aria-hidden="true">#</a> 1. 在使用git前需要先配置好自己的密钥</h2><p>首先需要检查自己有没有配置好 <strong>user name</strong> &amp; <strong>user email</strong></p><p><code>git config user.name</code> <code>git config user.email</code><br> 如果没有值的话就是没有配置,需要配置一下<br><code>git config --global user.name &#39;your name&#39;</code><br><code>git config --global user.email &#39;your mail&#39;</code></p><p><strong>以上操作完成后就可以生成密钥了</strong><br><code>ssh-keygen -t rsa -C &#39;your email&#39;</code></p><p>注意: name 和emial 需要单引号包裹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa       &lt;== 建立密钥对，-t代表类型，有RSA和DSA两种</span>
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/root/.ssh/id_rsa<span class="token punctuation">)</span>:   <span class="token operator">&lt;=</span><span class="token operator">=</span>密钥文件默认存放位置，按Enter即可
Created directory <span class="token string">&#39;/root/.ssh&#39;</span><span class="token builtin class-name">.</span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:     <span class="token operator">&lt;=</span><span class="token operator">=</span> 输入密钥锁码，或直接按 Enter 留空
Enter same passphrase again:     <span class="token operator">&lt;=</span><span class="token operator">=</span> 再输入一遍密钥锁码
Your identification has been saved <span class="token keyword">in</span> /root/.ssh/id_rsa.    <span class="token operator">&lt;=</span><span class="token operator">=</span> 生成的私钥
Your public key has been saved <span class="token keyword">in</span> /root/.ssh/id_rsa.pub.    <span class="token operator">&lt;=</span><span class="token operator">=</span> 生成的公钥
The key fingerprint is:
SHA256:K1qy928tkk1FUuzQtlZK+poeS67vIgPvHw9lQ+KNuZ4 root@localhost.localdomain
The key&#39;s randomart image is:
+---<span class="token punctuation">[</span>RSA <span class="token number">2048</span><span class="token punctuation">]</span>----+
<span class="token operator">|</span>           +.    <span class="token operator">|</span>
<span class="token operator">|</span>          o * <span class="token builtin class-name">.</span>  <span class="token operator">|</span>
<span class="token operator">|</span>        <span class="token builtin class-name">.</span> .O +   <span class="token operator">|</span>
<span class="token operator">|</span>       <span class="token builtin class-name">.</span> *. *    <span class="token operator">|</span>
<span class="token operator">|</span>        S <span class="token operator">=</span>+     <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token builtin class-name">.</span>    <span class="token operator">=</span><span class="token punctuation">..</span>.    <span class="token operator">|</span>
<span class="token operator">|</span>    .oo <span class="token operator">=</span>+o+     <span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token operator">==</span>o+B*o.    <span class="token operator">|</span>
<span class="token operator">|</span>    oo.<span class="token operator">=</span>EXO.     <span class="token operator">|</span>
+----<span class="token punctuation">[</span>SHA256<span class="token punctuation">]</span>-----+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后就可以把生成的公钥<code>rsa.pub</code>配置在你的git服务上了.</p>`,8),p=[t];function r(i,l){return n(),a("div",null,p)}const u=s(o,[["render",r],["__file","git.html.vue"]]);export{u as default};
