


GL.mockEngine.addMock("*", "#PrivacyBadge", function(elem) {
  var ret = "<div class='row'>";

 
    ret += "<div class='col-md-12 text-center'>Si no desea dejar el rastro de la dirección IP y quiere navegar de forma anónima, utilice el navegador <a rel='noreferrer noopener' href='https://www.torproject.org/es/download/' target='_blank'>Tor</a></div>"
  
  ret += "</div>";

  return ret;
});


GL.mockEngine.addMock("*", "#WhistleblowingQuestion", function(elem) {
  var ret = "<div class='row'>";

 
    ret += "<div class='col-md-12'><span class='homepage-text5'>Nueva comunicación</span></div>"
  
  ret += "</div>";
  ret += "<div class='row'>";

 
    ret += "<div class='col-md-12'><span class='homepage-text6'>Si desea iniciar la comunicación de una infracción cometida en el ámbito de la legislación expuesta anteriormente.</span></div>"
  

  ret += "</div>";

  return ret;
});

GL.mockEngine.addMock("*", "#WhistleblowerLoginQuestion", function(elem) {
  var ret = "<div class='row'>";


    ret += "<div class='col-md-12'><span class='homepage-text5'>Seguimiento de la comunicación</span></div>"
  

  ret += "</div>";
  ret += "<div class='row'>";

  
    ret += "<div class='col-md-12'><span class='homepage-text6'>Si quiere consultar el estado de tramitación o aportar más información sobre una comunicación anterior, introduzca el código numérico de acceso:</span></div>"
  

  ret += "</div>";

  return ret;
});

GL.mockEngine.addMock("*", "#WhistleblowerBox", function(elem) {
  var ret = "<div class='row'>";
  ret += "<div class='col-md-12'>";

  
    ret += "<div class='homepage-text3'>Canal Interno de Información</div>";
    ret += "<div class='homepage-text4'>El Canal Interno de Información de CTIC Centro Tecnológico es una herramienta que permite comunicar, de manera confidencial, la presunta comisión de una conducta comprendida en su ámbito de aplicación: denuncias o irregularidades relativas a acciones u omisiones que puedan constituir infracciones conforme a lo establecido en la Directiva (UE) 2019/1937 y Ley 2/2023, reguladora de la protección de las personas que informen sobre infracciones normativas y de lucha contra la corrupción.</div>";


  ret += "</div>";

  return ret;
}, 'add-before');

GL.mockEngine.addMock("*", "#WhistleblowingButton button", function(elem) {
  
    return "<span>INICIO DE LA COMUNICACIÓN</span>";
  
});

GL.mockEngine.addMock("*", "#ReceiptButton span", function(elem) {
  
    return "<span>ACCESO</span>";
  
});

GL.mockEngine.addMock("*", "#FooterBox", function(elem) {
  var ret = "<div class='row'>";

  
    ret += "<div class='col-md-4 text-center'><a rel='noreferrer noopener' href='https://www.fundacionctic.org/es/normativa-y-procedimiento-del-canal-interno-de-informacion' target='_blank'>Normativa y procedimiento</a></div>";
    ret += "<div class='col-md-4 text-center'>Fundación CTIC</div>";
    ret += "<div class='col-md-4 text-center'><span>Powered by <a rel='noreferrer noopener' href='https://www.globaleaks.org/'>GlobaLeaks</a>.</span></div>";
        
  

  ret += "</div>";

  return ret;
});


GL.mockEngine.addMock("*", "#KeyCodeBox", function(elem) {          
  return '<div class="key-icon"><img text="key symbol" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEFUlEQVR4Ae1aXYRVURSeqURERETM0xAxRE+lRPTaU0SJiCEihp6GYdLrEPOQKPcpekhERJRJKdFDopTJTSmlRJk0hkZ9X1qcs2ffuWudc+7+mbmLzzl337XXXt/a//vsgYG+9COwqiMwmDD7HfBtLzAMbAKGgI/AIvASeAvcA34CK0Z2gck08A74o8ACdG4Do8AGIFvZCc/vAhrSnXS+If8YsBbISibh7W+gEzFr+nPYYrdJXjbCwxuAlaBGn63hYMoR2ALnWFMaMlV12KpOphiE9XDqQY/JS9AYhORawqVA5CUI7A7JjAlHA5OXIDxFudFnBzZ97fwujjf5PIHyo8oZlN4kIastBp+VEEVY8BfA6nTT+qMu+0E3oUe/D8HuzYq2HyLffeA1wD0Bl8uHAa4jrPIYGfZYMzWh34IRa21+Rx4Omj7ZhkTuAaw2qc81SHBpo0SLs3PQH1F4ec1olz6w9QQVNlULeeqeVXrILsF53mL/fNH2muKPHr1zH2+ReShfVGb4Ab0rSl1RK/kTIgCbpWTl8w30LIccz5R2Ra3kT4gAWFdgFvIkZdUvrQVCBIBN2iKlJqrIaNUvBSxEAL4qSBRVOMVxrtcK1xgW+WxRbkKXXeAXYBmpOcdrZD+ULHapO6Yx3LTODAxaHZ1CnlJ/dZziOWKV5fVux06Qn+MoxRoA6vPUyHWYozjn8irniFwzWAdlZKkv22GiSgAkzwLyc09fdzvdqk+lugX2ayEU68luE0U4ss8CsYizXO4bokgK5DlesBsGlxTIs/ZLG6BQUUiFfNWDmFpxIvk2ELPPs2xOo9wyB5VUyD8C661BmaOwVMi34Mtyq8iexCUF8h/A7HhP2HUx2gR5jhl3gCrjBpe4/O4Q5ZJEU+RphzIMTAK8MMElcKeAMGBXAW6Hgzd3lPlPNOTpJAm9AnxkSETI43WJkBzPBwRDSzQiJWjIk7CQ4y5sHCjWajfykah1L1ZLngFwP25we8s+my15NkE672vOvjTqup+x2M+lZeA1H7GSl4BczodiZ0+rkpcgaL/2dPYg4j8a8hztqceFiG/En0V6lHka5dYSDXnW8kShFBKdBqT223innexES55EXwDuguQ00ljzK5681PQEyLriBsX9P8nflpoX8nxykXMgSUYGpzTkedDwCSiSl3fe7BgBopy/o9za8gQWhIzvyRFe5Ahe3K8zPLvPss8LKdauj7ikkXCxdnnnZuZ/nuzJg4fqHu8pKhaEA90FIOuaFz6aLzhzK4Ws735A6QKBRMV5cnNzC+CJa7E7OGrp/6waADLjSD+VPsXlPfQFgDevNPIeSueARY1yqjq+AGi6AMnvA/jMWtZ5vL+ONPbt4hKWn5Wlr8/j/RiQPXlw6Es/Av0IrPII/AW+DTcH8Te3CQAAAABJRU5ErkJggg==" width="64" height="64"></div>' + elem.innerHTML;
});

GL.mockEngine.addMock("*", "#KeyCodeBox + div", function(elem) {

  var ret = "";

        
        ret += '<p>Hay que conservar este c&oacute;digo de diecis&eacute;is d&iacute;gitos para: </p>';
        ret += '<ul>';
        ret += '<li>Acceder a la comunicaci&oacute;n.</li>';
        ret += '<li>Comunicarse con el &oacute;rgano gestor del buz&oacute;n y consultar los mensajes recibidos.</li>';
        ret += '<li>A&ntilde;adir ficheros o informaci&oacute;n adicional.</li>';
        ret += '<li>Conocer el estado de tramitaci&oacute;n de la comunicaci&oacute;n.</li>';
        ret += '</ul>';
        ret += '<p>El &oacute;rgano gestor del buz&oacute;n utilizar&aacute;, de manera prioritaria, este canal seguro, y garantizar&aacute; el anonimato y la confidencialidad de las comunicaciones.';
  

  return ret;
});

GL.mockEngine.addMock("*", "#KeyCodeBox + div + div", function(elem) {
        
        var loginFromReceiptButton = function(texto) {
                var keyCode = angular.element(document.body).injector().get('Authentication').submission.receipt;
                var encodedText = texto.replace("{0}", "'" + keyCode + "'");
                var div = document.createElement('div');
                div.innerHTML = encodedText;
                var decoded = div.firstChild.nodeValue;         
                if (confirm(decoded)) {
                        angular.element(document.body).injector().get('Authentication').login(0, 'whistleblower', keyCode);
                }
        }
        
        
                elem.addEventListener("click", function() {
                        loginFromReceiptButton('Recuerda copiar el c&oacute;digo de acceso {0}. En caso contrario no podr&aacute;s volver a acceder al canal seguro de comunicaci&oacute;n.');
                });
                return '<button id="ReceiptButton" class="float-right btn btn-secondary" data-translate="">Acceder a la comunicaci&oacute;n</button>';
             
});

GL.mockEngine.addMock("*", ".ext-public #link-reload", function(elem) {
        var ret = "";
        elem.addEventListener("click", function() {
                angular.element(document.body).injector().get('Authentication').logout();
                document.location.href = "/";
        });
        
                ret = "Salir";
        
        return ret;
});

GL.mockEngine.addMock("*", "#TipPageWBFileUpload .card-header", function(elem) {
        var ret = "";
        
                ret = 'Los ficheros adjuntos para el comunicador' + '<div style="margin-top:55px" class="alert alert-warning" role="alert">' +
                          '<i class="fas fa-exclamation-triangle"></i>&nbsp;<b>Alerta</b>&nbsp;El receptor adjunta estos archivos a la comunicaci&oacute;n' +
                          '</div>';
        
        return ret;
});



