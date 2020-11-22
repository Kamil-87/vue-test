<template>
  <form class="form-box">
    <div class="form-group">
      <label for="titlePost">
        <input
            id="titlePost"
            type="text"
            placeholder="Название статьи"
        >
      </label>
    </div>

    <div class="form-group">
      <label for="descriptionPost">
        <textarea id="descriptionPost" placeholder="Описание статьи" />
      </label>
    </div>

    <label for="imagePost">
      <input
          id="imagePost"
          type="text"
          placeholder="Картинку"
      >
    </label>

    <button class="btn" type="submit">Сохранить</button>
  </form>
</template>

<style>
.form-box {
  padding: 0 20px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  display: block;
  width: 100%;
  margin: 4px;
  padding: 10px 15px;
  border: 1px solid rgb(178, 178, 178);
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}

textarea {
  display: block;
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  border: 1px solid rgb(178, 178, 178);
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}

</style>
