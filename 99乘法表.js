document.write("<table class ='boxCss'>");
for (var i = 1; i<10; i++){
    document.write("<tr>");
    for (var j = 1;j<=i;j++){
        document.write("<td class='tableCss'>");
        document.write(j+" * "+i+" = "+i*j);
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");