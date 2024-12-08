module StellarStaking {
    struct Stake {
        staker: address;
        amount: u64;
        duration: u64;
        reward_rate: u64;
    }

    public fun stake_tokens(staker: address, amount: u64, duration: u64): Stake {
        assert!(amount > 0, "Stake amount must be positive");
        Stake {
            staker,
            amount,
            duration,
            reward_rate: 10, // 10% reward rate
        }
    }

    public fun calculate_rewards(stake: &Stake): u64 {
        stake.amount * stake.reward_rate / 100
    }
}
