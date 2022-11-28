<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Staff</h3>
                <div class="card-tools">
                    <button class="btn btn-primary" v-b-tooltip.hover title="create ">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>

            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td><span class="tag tag-success">Approved</span></td>
                            <td>
                                <button class="btn btn-orange text-light" v-b-tooltip.hover title="Edit">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button class="btn btn-danger" v-b-tooltip.hover title="Delete">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component Mounted');
    }
}
</script>