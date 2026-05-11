<template>
  <div class="site-links">
    <div class="line">
      <link-cloud class="line-icon" theme="two-tone" size="24" :fill="['#efefef', '#00000020']" />
      <span class="title">{{ t("siteLinks.title") }}</span>
    </div>

    <div class="intro">
      <span class="eyebrow">{{ t("siteLinks.eyebrow") }}</span>
      <h2>{{ t("siteLinks.heading") }}</h2>
      <p>{{ t("siteLinks.description") }}</p>
    </div>

    <div class="link-list">
      <a
        v-for="item in siteLinks"
        :key="item.url"
        class="site-link-card"
        :href="item.url"
        :aria-label="t('siteLinks.openAria', { name: t(item.nameKey) })"
      >
        <span class="icon-wrap">
          <img :src="item.icon" :alt="t(item.nameKey)" />
        </span>
        <span class="link-copy">
          <span class="link-name">{{ t(item.nameKey) }}</span>
          <span class="link-desc">{{ t(item.descriptionKey) }}</span>
          <span class="link-meta">{{ t(item.metaKey) }}</span>
        </span>
        <right class="link-arrow" theme="outline" size="20" fill="#efefef" />
      </a>
    </div>

    <div class="tag-list" :aria-label="t('siteLinks.tagsLabel')">
      <span v-for="tagKey in tagKeys" :key="tagKey">{{ t(tagKey) }}</span>
    </div>
  </div>
</template>

<script setup>
import { LinkCloud, Right } from "@icon-park/vue-next";
import { useI18n } from "vue-i18n";
import siteLinks from "@/assets/siteLinks.json";

const { t } = useI18n();

const tagKeys = ["siteLinks.tags.photography", "siteLinks.tags.travel", "siteLinks.tags.daily"];
</script>

<style lang="scss" scoped>
.line {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 24px;
  line-height: 1;
  animation: fade 0.5s;

  .line-icon {
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 1.15rem;
    line-height: 24px;
    text-shadow: 0 0 5px #00000050;
  }
}

.site-links {
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: #00000040;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: fade 0.5s;

  .intro {
    margin-bottom: 1rem;

    .eyebrow {
      display: inline-block;
      margin-bottom: 0.35rem;
      font-size: 0.78rem;
      opacity: 0.72;
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.35;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    p {
      font-size: 0.92rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.78);
    }
  }

  .link-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .site-link-card {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr) 22px;
    gap: 0.85rem;
    align-items: center;
    min-height: 92px;
    padding: 0.85rem;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.12);
    text-decoration: none;
    transition:
      background-color 0.3s,
      border-color 0.3s,
      transform 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.16);
      border-color: rgba(255, 255, 255, 0.28);
      transform: translateY(-2px);
      text-decoration: none;
    }

    &:active {
      transform: translateY(0);
    }

    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.14);

      img {
        width: 28px;
        height: 28px;
      }
    }

    .link-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .link-name {
      font-size: 1rem;
      font-weight: 700;
    }

    .link-desc,
    .link-meta {
      overflow-wrap: anywhere;
    }

    .link-desc {
      font-size: 0.88rem;
      line-height: 1.45;
      color: rgba(255, 255, 255, 0.76);
    }

    .link-meta {
      font-size: 0.78rem;
      color: rgba(255, 255, 255, 0.52);
    }

    .link-arrow {
      opacity: 0.72;
    }
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;

    span {
      padding: 0.35rem 0.65rem;
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.12);
      font-size: 0.78rem;
      color: rgba(255, 255, 255, 0.78);
    }
  }

  @media (max-width: 720px) {
    margin-top: 0.75rem;
  }

  @media (max-width: 390px) {
    .site-link-card {
      grid-template-columns: 42px minmax(0, 1fr);

      .icon-wrap {
        width: 42px;
        height: 42px;
      }

      .link-arrow {
        display: none;
      }
    }
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
