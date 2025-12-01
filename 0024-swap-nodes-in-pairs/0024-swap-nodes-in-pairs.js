var swapPairs = function(head) {
    const dummy = {next: head};
    let prev = dummy;
    while (prev.next && prev.next.next) {
        let a = prev.next;
        let b = a.next;
        a.next = b.next;
        b.next = a;
        prev.next = b;
        prev = a;
    }
    return dummy.next;
};
