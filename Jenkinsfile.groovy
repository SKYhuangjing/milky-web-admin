node {
    cleanWs()
    checkout scm

    def webhookId = "template-web"
    def rancherNamespace = "workflow"
    def rancherContainer = "template-web"

    def harborProject = "com.zenlayer.oss"
    def imageName = "oss-template.web"
    def image = "com.zenlayer.oss/oss-template.web"

    def version = "1.15.0"

    dir("pipelines") {
        git branch: 'master', changelog: false, credentialsId: 'gitlab', poll: false, url: 'http://gitlab.zenlayer.net/sh-dev/deploy/jenkins-harbor.git'

        node = load "common/node.groovy"
        docker = load "common/docker.groovy"
        webhooks = load "common/rancher-webhooks.groovy"
        jenkinsFile = load "common/default-pipeline-node.groovy"
        load "config.groovy"
        gitFunc = load "common/git.groovy"
        message = load "common/message-webhooks.groovy"
    }
    def msg = "template-web 测试环境更新啦!!!\n" + gitFunc.getChangeString();
    echo msg
    jenkinsFile.start(image, version)
    webhooks.notify_(webhookId, rancherNamespace, rancherContainer, harborProject, imageName, "latest")

    message.teams_notify_(msg)
    message.wechat_work_notify_(msg, '13671520967')
}
