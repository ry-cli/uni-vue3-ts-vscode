<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
    console.log('App Launch')
})
onShow(async () => {})
onHide(() => {
    console.log('App Hide')
})
</script>
<style lang="scss">
body {
    background: #f4f4f4;
    color: rgba(0, 0, 0, 0.8);
}
.row {
    margin-bottom: 20upx;
    background: #fff;
}
.col {
    padding: 0 30upx;
}
</style>
