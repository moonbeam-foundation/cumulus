(function() {var implementors = {
"bp_runtime":[["impl&lt;S&gt; SignedExtension for <a class=\"struct\" href=\"bp_runtime/extensions/struct.GenericSignedExtension.html\" title=\"struct bp_runtime::extensions::GenericSignedExtension\">GenericSignedExtension</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"bp_runtime/extensions/trait.SignedExtensionSchema.html\" title=\"trait bp_runtime::extensions::SignedExtensionSchema\">SignedExtensionSchema</a>,\n    S::<a class=\"associatedtype\" href=\"bp_runtime/extensions/trait.SignedExtensionSchema.html#associatedtype.Payload\" title=\"type bp_runtime::extensions::SignedExtensionSchema::Payload\">Payload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    S::<a class=\"associatedtype\" href=\"bp_runtime/extensions/trait.SignedExtensionSchema.html#associatedtype.AdditionalSigned\" title=\"type bp_runtime::extensions::SignedExtensionSchema::AdditionalSigned\">AdditionalSigned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"bridge_hub_rococo_runtime":[["impl SignedExtension for <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_rococo_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>"]],
"bridge_runtime_common":[["impl&lt;Runtime, Para, Msgs, Refund, Priority, Id&gt; SignedExtension for <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundBridgedParachainMessages.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundBridgedParachainMessages\">RefundBridgedParachainMessages</a>&lt;Runtime, Para, Msgs, Refund, Priority, Id&gt;<span class=\"where fmt-newline\">where\n    Self: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Runtime: UtilityConfig&lt;RuntimeCall = &lt;Runtime as Config&gt;::RuntimeCall&gt; + BoundedBridgeGrandpaConfig&lt;Runtime::BridgesGrandpaPalletInstance&gt; + ParachainsConfig&lt;Para::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableParachainId.html#associatedtype.Instance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundableParachainId::Instance\">Instance</a>&gt; + MessagesConfig&lt;Msgs::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html#associatedtype.Instance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId::Instance\">Instance</a>&gt; + RelayersConfig,\n    Para: <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableParachainId.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundableParachainId\">RefundableParachainId</a>,\n    Msgs: <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId\">RefundableMessagesLaneId</a>,\n    Refund: <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundCalculator.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundCalculator\">RefundCalculator</a>&lt;Balance = Runtime::Reward&gt;,\n    Priority: Get&lt;TransactionPriority&gt;,\n    Id: StaticStrProvider,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;Info = DispatchInfo, PostInfo = PostDispatchInfo&gt; + IsSubType&lt;CallableCallFor&lt;UtilityPallet&lt;Runtime&gt;, Runtime&gt;&gt; + GrandpaCallSubType&lt;Runtime, Runtime::BridgesGrandpaPalletInstance&gt; + ParachainsCallSubType&lt;Runtime, Para::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableParachainId.html#associatedtype.Instance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundableParachainId::Instance\">Instance</a>&gt; + <a class=\"trait\" href=\"bridge_runtime_common/messages_call_ext/trait.MessagesCallSubType.html\" title=\"trait bridge_runtime_common::messages_call_ext::MessagesCallSubType\">MessagesCallSubType</a>&lt;Runtime, Msgs::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html#associatedtype.Instance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId::Instance\">Instance</a>&gt;,</span>"]],
"shell_runtime":[["impl SignedExtension for <a class=\"struct\" href=\"shell_runtime/struct.DisallowSigned.html\" title=\"struct shell_runtime::DisallowSigned\">DisallowSigned</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()