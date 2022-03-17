function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const msg1 = `<p class="animation mb-0 text-truncate">Hai capek yhaa?</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed aku gak jual apa apa</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Follow ML aku-> 'Nextype Deni'</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Semangat yhaa</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Aman sedikit dunia</p>`;
    const msg6 = `<p class="animation mb-0 text-truncate">Jangan lupa istirahat loh</p>`;
    const msg7 = `<p class="animation mb-0 text-truncate">Ingat, WR hanyalah angka</p>`;
    const msg8 = `<p class="animation mb-0 text-truncate">Lo user apa?</p>`;
    const msg9 = `<p class="animation mb-0 text-truncate">Mabar yok</p>`;
    const msg10 = `<p class="animation mb-0 text-truncate">Semangat mainnya yhaa</p>`;
    const msg11 = `<p class="animation mb-0 text-truncate">Semangat push ke MYTHIC gak malu ROMAWI mulu </p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11];
    let arrayMax = 11;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}