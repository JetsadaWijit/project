var img_host_link = 'https://i.imgur.com';

var elementData = [
    {
        header: 'MCEngine',
        img_id: '9O7Dfn9'
    }
];

// New structure for elementDataSub
var elementDataSub = {
    // MCEngine
    mcengine: [    
        {
            name: 'heaven',
            platform: 'GitLab',
            img_id: '9O7Dfn9'
        },
        {
            name: 'hell',
            platform: 'GitLab',
            img_id: '9O7Dfn9'
        },
        {
            name: 'mcengine',
            platform: 'GitHub',
            img_id: '9O7Dfn9'
        },
        {
            name: 'shadow',
            platform: 'GitLab',
            img_id: '9O7Dfn9'
        }
    ]
};

var body = document.body;

for (var i = 0; i < elementData.length; i++) {
    var header = document.createElement('div');
    header.className = 'header';

    var headerImg = document.createElement('img');
    headerImg.className = 'img-logo-header';
    headerImg.src = img_host_link + '/' + elementData[i].img_id + '.jpg';
    headerImg.alt = elementData[i].header;
    header.appendChild(headerImg);

    var container = document.createElement('div');
    container.className = 'container';

    var github = document.createElement('div');
    github.className = 'left';

    var gitlab = document.createElement('div');
    gitlab.className = 'right';

    if (elementData[i].header === 'MCEngine' && elementDataSub.mcengine) {
        for (var j = 0; j < elementDataSub.mcengine.length; j++) {
            var dataContainer = createPlatformDiv(elementData[i].header, elementDataSub.mcengine[j].platform, elementDataSub.mcengine[j].name, elementDataSub.mcengine[j].img_id);
            if (elementDataSub.mcengine[j].platform === 'GitHub') {
                github.appendChild(dataContainer);
            } else if (elementDataSub.mcengine[j].platform === 'GitLab') {
                gitlab.appendChild(dataContainer);
            }
        }
    }

    container.appendChild(github);
    container.appendChild(gitlab);

    body.appendChild(header);
    body.appendChild(container);
}

function createPlatformDiv(header, platform, project, img_id) {
    var containerImg = document.createElement('img');
    containerImg.className = 'img-logo';
    containerImg.src = img_host_link + '/' + img_id + '.jpg';
    containerImg.alt = 'logo';

    var containerLink = document.createElement('a');
    containerLink.href = 'https://' + header.toLowerCase() + '.' + platform.toLowerCase() + '.io/' + project.toLowerCase();
    containerLink.appendChild(containerImg);
    return containerLink;
}
