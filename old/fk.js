// 
const fk_delete_post = () => {
    [...document.querySelectorAll("#N_ > table > tbody > tr")].forEach(row => {
        if (row.querySelector('td:nth-child(2) > a').innerText == '-') return;
        var post = row.querySelector('td.w100 > div > a');
        const rex = /\d+/;
        var match = post.href.match(rex);
        if (match.length == 1) {
            var doc = match[0];
            console.log(doc);
            fetch("https://www.fmkorea.com/write.php", {
                "headers": {
                    "accept": "application/xml, text/xml, */*; q=0.01",
                    "accept-language": "ko,en;q=0.9,en-US;q=0.8",
                    "content-type": "text/xml; charset=utf-8",
                    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Microsoft Edge\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": `https://www.fmkorea.com/index.php?document_srl=${doc}&act=dispBoardDelete`,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<methodCall>\n<params>\n<_filter><![CDATA[delete_document]]></_filter>\n<document_srl><![CDATA[${doc}]]></document_srl>\n<module><![CDATA[board]]></module>\n<act><![CDATA[procBoardDeleteDocument]]></act>\n</params>\n</methodCall>`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
                .then(async (resp) => {
                    if (resp.status == 200) {
                        var content = await resp.text();
                        console.log(resp.status, content);
                    }
                    else {
                        console.log(resp.status);
                    }
                });
        }
    });
}
const fk_delete_comment = () => {
    const rex = /document_srl=(.*)&s_comment_srl=(.*)#/;
    [...document.querySelectorAll("td.w100 > div > a")].forEach(btn => {
        if (btn.innerText == "[삭제된 댓글입니다.]") return;
        var match = btn.href.match(rex)
        if (match.length > 2) {
            var doc = match[1];
            var com = match[2];
            fetch("https://www.fmkorea.com/write.php", {
                "headers": {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                    "accept-language": "ko,en;q=0.9,en-US;q=0.8",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Microsoft Edge\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": `https://www.fmkorea.com/${doc}`,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": `document_srl=${doc}&mid=&comment_srl=${com}&module=board&act=procBoardDeleteComment`,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
                .then(async (resp) => {
                    if (resp.status == 200) {
                        var content = await resp.json();
                        console.log(resp.status, content.message);
                    }
                    else {
                        console.log(resp.status);
                    }
                });
        }
    });
}