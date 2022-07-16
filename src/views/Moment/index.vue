<template>
  <div class="post-moment" v-if="settingStore.$state.showAvatar">
    <n-button @click="handleClick" secondary round style="width: 100%"
      >{{ currentUser.nickname }}，有什么新鲜事告诉大家！</n-button
    >
  </div>
  <div class="moment-wrapper" v-for="item in momentList">
    <MomentCard class="moment-card" :moment="item" />
  </div>
  <n-modal v-model:show="showPostMoment" :mask-closable="false">
    <n-card
      style="width: 600px"
      title="创建帖子"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      closable
      @close="showPostMoment = false"
    >
      <n-input
        v-model:value="newMoment"
        type="textarea"
        placeholder="分享你的新鲜事！"
      ></n-input>
      <template #footer>
        <n-button type="primary" @click="postNewMoment">发布</n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import MomentCard from "@/components/MomentCard/index.vue";
  import { getMoments, postMoment } from "@/api/setting";
  import { useUserStore } from "@/store/modules/user";
  import { storeToRefs } from "pinia";
  import { useSettingStore } from "@/store/modules/setting";
  import { useMessage } from "naive-ui";

  const showPostMoment = ref<boolean>(false);

  const store = useUserStore();
  const { currentUser } = storeToRefs(store);
  const settingStore = useSettingStore();

  const message = useMessage();

  const newMoment = ref(null);

  const momentList = ref<MomentProps[]>([]);

  const fetchMoment = () => {
    getMoments()
      .then((res) => {
        momentList.value = res.data;
      })
      .catch((e) => console.log(e));
  };

  const handleClick = () => {
    showPostMoment.value = true;
  };

  const postNewMoment = () => {
    if (!newMoment.value) {
      message.warning("发布内容不可为空！");
      return;
    }
    const obj = {
      username: currentUser.value.username,
      content: newMoment.value,
    };
    postMoment(obj)
      .then((res) => {
        console.log(res);
        message.success("发布成功");
        fetchMoment();
      })
      .catch((error) => {
        message.error("发布异常");
        console.error(error);
      });
  };

  fetchMoment();
</script>

<style scoped>
  .post-moment {
    width: 50%;
    margin: 30px auto;
  }
  .moment-wrapper {
    width: 100%;
  }
  .moment-card {
    margin: 20px auto;
  }
</style>
