basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(40, 40)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(20, 40)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(40, 20)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(20, 0)
    }
})
