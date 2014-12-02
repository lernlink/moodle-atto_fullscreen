YUI.add("moodle-atto_fullscreen-button",function(e,t){var n="atto_fullscreen",r="fullscreen",i=!1;e.namespace("M.atto_fullscreen").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var t=this.addButton({icon:"icon",iconComponent:n,callback:this._toggle}),r=this.get("host");t.set("title",M.util.get_string("fullscreen:desc","editor_tinymce")),r.on("pluginsloaded",function(t,n){this._setFullscreen(n),this.toolbar.after("click",this._fitToScreen,this),e.on("windowresize",this._fitToScreen,this),r.textarea.after("focus",function(){r.enablePlugins("fullscreen")})},this,t)},_toggle:function(e){e.preventDefault();var t=this.buttons[r];t.getData(i)?(this.unHighlightButtons(r),this._setFullscreen(t)):(this.highlightButtons(r),this._setFullscreen(t,!0))},_fitToScreen:function(){var e=this.buttons[r];if(!e.getData(i))return;var t=this.get("host"),n=t.editor.get("winHeight")+"px",s=t.editor.get("winWidth")+"px";t.editor.setStyles({height:n,"max-height":n}),t.textarea.setStyles({overflow:"scroll",width:s,height:n,"max-height":n}),t._wrapper.setStyles({maxWidth:s,width:s}),n=2*t.editor.get("winHeight")-parseInt(t._wrapper.getComputedStyle("height"))+"px",t.editor.setStyles({height:n,maxHeight:n}),t.textarea.setStyles({height:n,maxHeight:n}),window.scroll(t._wrapper.getX(),t._wrapper.getY())},_setFullscreen:function(t,n){var r=this.get("host");n?(e.one("body").setStyle("overflow","hidden"),this._editorStyle={minHeight:r.editor.getStyle("min-height"),height:r.editor.getStyle("height")},this._textareaStyle={width:r.textarea.getStyle("width"),height:r.textarea.getStyle("height")},e.one("body").addClass("atto-fullscreen")):(e.one("body").setStyle("overflow","inherit"),this._editorStyle&&(r.editor.removeAttribute("style"),r.editor.setStyles(this._editorStyle)),this._textareaStyle&&(r.textarea.removeAttribute("style"),r.textarea.setStyles(this._textareaStyle)),r._wrapper.removeAttribute("style"),e.one("body").removeClass("atto-fullscreen")),t.setData(i,!!n),this._fitToScreen()}})},"@VERSION@",{requires:["event-resize","moodle-editor_atto-plugin"]});
