import EchoPackage from "laravel-echo";
import Pusher from "pusher-js";
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';

export const timeFormat = function (timeString: string) {
    var d = new Date(timeString);
    return `${d.toLocaleTimeString('id-ID', {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    })}`
}

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


export function copyText(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        Toast.fire({
            icon: "success",
            title: "Link berhasil disalin"
        });
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);

}

export var pusher = new Pusher('f61ad526f74298547fab', {
    cluster: 'ap1'
});



export function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
