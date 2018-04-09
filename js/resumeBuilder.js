/*
This is empty on purpose! Your code to build the resume will go here.
 */


$(function() {
    var model = {
        init: function(){
            this.projects = [{
                "id":"1",
                "name":"project1",
                "shortDescription":"Simple project",
                "longDescription":"Made stuff work while doing stuff"
            },
            {}];
        },
        getProjects(){
            return this.projects;
        }

    };

    var controller = {
        init: function(){
            model.init();
            viewProjects.init();
            

        },
        projects: function(){
            return model.getProjects();
        }

    };

    var viewMain = {

    }

    var viewPastJobs = {

    }

    var viewProjects = {
        init: function(){
            this.projectList = $("#projects");
            this.initialHTML = this.projectList.html();
            this.projectList.show();
            viewProjects.render();
        },

        render: function(){
            var html = this.initialHTML + "<div id='divProjects'>";
            projects  = controller.projects();
            for (elem in projects){
                html += "<h5>Name: " + projects[elem].name + " || Short Desc: " + projects[elem].shortDescription;
                html += "</h5>"
            }
            html += '</div>'
            this.projectList.html( html );
        }
    }

    // run the initializers
    controller.init();
});