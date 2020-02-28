<template>
<div id="sidebartemplate">
    <div class="wrapper">
        <nav id="sidebar">
            <div class="sidebar-heading">
                <p>components side bar</p> 
            </div>
            <ul class="listcomponent">
                <li class="active">
                    <a href="#global" data-toggle="collapse">Global Registration</a>
                </li>    
                <li>
                    <a href="#local">Local Registration</a>
                </li>            
            </ul>
        </nav>
    </div>
    <button id="sidebarcollapsebutton">
        <span class="glyphicon glyphicon-th-list">Toggle SideBar</span>
    </button>
</div>
</template>

<style>
    #sidebartemplate{
        width: 250px;
    }
    .active{
        margin-left: -100px;
    }
    .listcomponent{
        list-style: none;
    }

</style>

<script>
    export default{
        name:'sidenavbar'
    }
</script>


