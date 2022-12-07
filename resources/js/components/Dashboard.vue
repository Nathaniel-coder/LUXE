<template>
    <div>
        <div class="row">
            <div class="col-lg-4 col-6">
                <div class="small-box bg-primary shadow">
                    <div class="inner">
                        <!-- <h3>{{ saleAmount.length }}</h3> -->
                        <p>New Orders</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-bag"></i>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6">

                <div class="small-box bg-danger shadow">
                    <div class="inner">
                        <!-- <h3>{{ userAmount.length }}<sup style="font-size: 20px">%</sup></h3> -->
                        <p>Bounce Rate</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-stats-bars"></i>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6">

                <div class="small-box bg-orange text-light shadow">
                    <div class="inner">
                        <h3>{{ userAmount }}</h3>
                        <p>User Registrations</p>
                    </div>
                    <div class="icon">
                        <i class="ion ion-person-add"></i>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">

            <section class="col connectedSortable">

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-chart-pie mr-1"></i>
                            Sales
                        </h3>
                        <div class="card-tools">
                            <ul class="nav nav-pills ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content p-0">

                            <div class="chart tab-pane active" id="revenue-chart"
                                style="position: relative; height: 300px;">
                                <canvas id="revenue-chart-canvas" height="300" style="height: 300px;"></canvas>
                            </div>
                            <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;">
                                <canvas id="sales-chart-canvas" height="300" style="height: 300px;"></canvas>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            userAmount: []
        }
    },
    methods: {
        loadUsers() {
            axios.get("/api/dashboard").then(response => this.userAmount = response.data);
        }
    },
    mounted() {
        console.log('Component Mounted');
        console.log(userAmount);
    }
}
</script>
