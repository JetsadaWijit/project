var img_host_link = 'https://i.imgur.com';

var elementData = [
    {
        header: 'MCEngine',
        img_id: '9O7Dfn9'
    }
];

var elementDataSub = {
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

    // Dynamic approach to handle any header
    var currentHeader = elementData[i].header.toLowerCase(); // Assuming headers are case-insensitive
    if (elementDataSub[currentHeader]) {
        for (var j = 0; j < elementDataSub[currentHeader].length; j++) {
            var project = elementDataSub[currentHeader][j];
            var dataContainer = createPlatformDiv(elementData[i].header, project.platform, project.name, project.img_id);
            
            if (project.platform === 'GitHub') {
                github.appendChild(dataContainer);
            } else if (project.platform === 'GitLab') {
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
