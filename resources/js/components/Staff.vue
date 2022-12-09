<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Staff</h3>
                <div class="card-tools">
                    <!-- <button class="btn btn-primary" @click="newModal()">
                        <i class="fa fa-plus"></i>
                    </button> -->
                </div>
            </div>

            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <!-- <th>ID</th> -->
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Registered At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <!-- <td>{{ user.id }}</td> -->
                            <td>{{ user.name }} </td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.type | upText }}</td>
                            <td>{{ new Date(user.created_at) | dateFormat('DD/MM/YYYY') }}</td>
                            <td>
                                <button class="btn btn-orange text-light" @click="editModal(user)">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button @click="deleteUser(user.id)" class="btn btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form @submit.prevent="editmode ? updateUser() : createUser()">
                        <div class="modal-header">
                            <h5 v-show="!editmode" class="modal-title" id="exampleModalLongTitle">Create Staff</h5>
                            <h5 v-show="editmode" class="modal-title" id="exampleModalLongTitle">Edit Staff</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="form-group">
                                <!-- <input v-model="form.name" type="text" name="name" placeholder="Name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                            <HasError :form="form" field="name"/> -->
                                <input v-model="form.name" type="text" name="name" placeholder="Name"
                                    class="form-control">
                                <div class="text-danger" v-if="form.errors.has('name')"
                                    v-html="form.errors.get('name')"></div>
                            </div>
                            <div class="form-group">
                                <!-- <input v-model="form.email" type="email" name="email" placeholder="Email"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                            <HasError :form="form" field="email" /> -->
                                <input v-model="form.email" type="email" name="email" placeholder="Email"
                                    class="form-control">
                                <div class="text-danger" v-if="form.errors.has('email')"
                                    v-html="form.errors.get('Email')"></div>
                            </div>
                            <div class="form-group">
                                <!-- <input v-model="form.password" type="password" name="password" placeholder="Password"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                            <HasError :form="form" field="password" /> -->
                                <input v-model="form.password" type="password" name="password" placeholder="Password"
                                    class="form-control">
                                <div class="text-danger" v-if="form.errors.has('password')"
                                    v-html="form.errors.get('password')"></div>
                            </div>
                            <div class="form-group">
                                <!-- <select v-model="form.type" id="type" name="type" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('type') }">
                                <option selected>Select User Type</option>
                                <option value="Admin">Admin</option>
                                <option value="Standard Staff">Standard Staff</option>
                            </select> -->
                                <!-- <HasError :form="form" field="type" /> -->
                                <select v-model="form.type" id="type" name="type" class="form-control"
                                    placeholder="Select User Type">
                                    <option selected disabled>Select User Type</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Standard Staff">Standard Staff</option>
                                </select>
                                <div class="text-danger" v-if="form.errors.has('type')"
                                    v-html="form.errors.get('type')"></div>
                            </div>
                            <div class="form-group">
                                <!-- <textarea v-model="form.bio" name="bio" placeholder="Bio" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                            <HasError :form="form" field="bio" /> -->
                                <textarea v-model="form.bio" name="bio" placeholder="Bio" class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                                <div class="text-danger" v-if="form.errors.has('bio')" v-html="form.errors.get('bio')">
                                </div>
                            </div>

                            <!-- <input v-model="form.password" type="email" name="email" placeholder="Email">
                        <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" /> -->

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
                            <button v-show="editmode" type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from 'vform'
// import AlertErrors from 'vform'
// import AlertSuccess from 'vform'
export default {
    data() {
        return {
            editmode: false,
            users: {},
            form: new Form({
                id: '',
                name: '',
                email: '',
                password: '',
                type: '',
                bio: '',
                photo: ''
            }),
        }
    },
    methods: {
        editModal(user) {
            this.editmode = true;
            this.form.reset();
            $('#addNew').modal('show')
            this.form.fill(user);
        },
        newModal() {
            this.editmode = false;
            this.form.reset();
            $('#addNew').modal('show')
        },
        loadUsers() {
            axios.get("api/user").then(({ data }) => (this.users = data.data));
        },
        createUser() {
            this.$Progress.start();
            this.form.post('api/user')
                .then(() => {
                    toast.fire({
                        icon: 'success',
                        title: 'New User Succesfully Created!'
                    });
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide')
                    this.$Progress.finish();
                })
                .catch(() => {
                    toast.fire({
                        icon: 'warning',
                        title: 'Oops, Something went wrong!'
                    });
                })
        }, updateUser(id) {
            this.$Progress.start();
            this.form.put('api/user/' + this.form.id).
                then(() => {
                    Swal.fire(
                        'Updated!',
                        'Successfully Updated.',
                        'success'
                    )
                    $('#addNew').modal('hide')
                }).catch(() => {
                    this.$Progress.fail();
                    Swal.fire(
                        'Failed',
                        'Oops, Something went wrong!',
                        'warning'
                    )
                })
        },
        deleteUser(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.form.delete('api/user/' + id).then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })

                } Fire.$emit('AfterCreate');
            }).catch(() => {
                Swal.fire(
                    'Failed',
                    'Oops, Something went wrong!',
                    'warning'
                )
            })
            //Sent Delete request
        }
    },
    created() {
        this.loadUsers();
        Fire.$on('AfterCreate', () => {
            this.loadUsers();
        })
        // setInterval(() => this.loadUsers(),2000);
    },
    mounted() {
        console.log('Component Mounted');
    }
}
</script>
